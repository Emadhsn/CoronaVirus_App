import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PieChart} from 'react-native-svg-charts';
import numeral from 'numeral';

import {Container, Card, Text, Legand} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';
import {selectDashboard, dashboardRequest} from './dashboardSlice';
import {loaderLockAction} from '../loaderLock/loaderLockSlice';

export const Dashboard = ({navigation}) => {
  const {loading, entities, error} = useSelector(selectDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(error?.message);
    }
    dispatch(loaderLockAction(loading));
  }, [error, loading]);

  useEffect(() => {
    dispatch(dashboardRequest());
  }, []);

  if (!entities?.Countries?.length) return null;

  return (
    <ScrollView style={styles.body}>
      <Container>
        <Card style={{height: 125}}>
          <View style={styles.cardTitleBody}>
            <Text>{Trans.totalCases}</Text>
            <Text style={styles.primaryText}>
              {numeral(
                entities?.Global?.TotalRecovered +
                  entities?.Global?.TotalDeaths +
                  entities?.Global?.TotalConfirmed,
              ).format('0,0')}
            </Text>
          </View>
          <Legand
            items={[
              {
                label: Trans.totalRecovered,
                color: colors.recoveredColor,
                value: entities?.Global?.TotalRecovered,
              },
              {
                label: Trans.totalConfirmed,
                color: colors.confirmedColor,
                value: entities?.Global?.TotalConfirmed,
              },
              {
                label: Trans.totalDeaths,
                color: colors.DeathColor,
                value: entities?.Global?.TotalDeaths,
              },
            ]}
          />
        </Card>
        <Card
          style={{
            height: 450,
            marginTop: 5,
          }}>
          <View style={styles.cardTitleBody}>
            <Text>{Trans.newCases}</Text>
          </View>
          <View style={styles.itemCardBody}>
            <PieChart
              innerRadius={0}
              style={styles.chartBody}
              data={[
                {
                  value: entities?.Global?.TotalRecovered,
                  svg: {fill: colors.recoveredColor},
                  key: 'rec',
                },
                {
                  value: entities?.Global?.TotalDeaths,
                  svg: {fill: colors.DeathColor},
                  key: 'dth',
                },
                {
                  value: entities?.Global?.TotalConfirmed,
                  svg: {fill: colors.confirmedColor},
                  key: 'con',
                },
              ]}
            />
          </View>
          <Legand
            items={[
              {
                label: Trans.newRecovered,
                color: colors.recoveredColor,
                value: entities?.Global?.NewRecovered,
              },
              {
                label: Trans.newConfirmed,
                color: colors.confirmedColor,
                value: entities?.Global?.NewConfirmed,
              },
              {
                label: Trans.newDeaths,
                color: colors.DeathColor,
                value: entities?.Global?.NewDeaths,
              },
            ]}
          />
        </Card>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 5,
    backgroundColor: colors.background,
    flex: 1,
    height: '100%',
  },
  itemCardBody: {alignItems: 'center'},
  chartBody: {height: '80%', width: '100%'},
  primaryText: {fontSize: 20, fontWeight: 'bold'},
  cardTitleBody: {alignItems: 'center', paddingVertical: 10},
});
