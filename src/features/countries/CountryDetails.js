import React, {useEffect} from 'react';
import {View, StyleSheet, Alert, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as shape from 'd3-shape';
import {StackedAreaChart} from 'react-native-svg-charts';
import numeral from 'numeral';

import {Container, Card, Text, Legand} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';
import {selectCountry, countryRequest} from './countrySlice';
import {loaderLockAction} from '../loaderLock/loaderLockSlice';

import {renderEmpty, renderSeperator} from './Countries';
import {CountryItemData} from './CountryItemData';

export const CountryDetails = ({navigation, route}) => {
  const {loading, entities, error} = useSelector(selectCountry);
  const {_item} = route.params;
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(countryRequest({CountryCode: _item.CountryCode}));
  };
  useEffect(() => {
    if (error) {
      Alert.alert(error?.message);
    }
    // dispatch(loaderLockAction(loading));
  }, [error, loading]);

  useEffect(() => {
    navigation.setOptions({title: _item.Country});
    fetchData();
  }, []);

  const HeaderComponent = () => {
    return (
      <Card style={styles.headerBody}>
        <View style={styles.cardTitleBody}>
          <Text>{Trans.totalCases}</Text>
          <Text style={styles.primaryText}>
            {numeral(
              _item?.TotalRecovered +
                _item?.TotalDeaths +
                _item?.TotalConfirmed,
            ).format('0,0')}
          </Text>
        </View>

        <View style={{marginVertical: 10}}>
          <StackedAreaChart
            data={entities.data}
            style={styles.chartBody}
            keys={['Recovered', 'Confirmed', 'Deaths']}
            colors={[
              colors.recoveredColor,
              colors.confirmedColor,
              colors.DeathColor,
            ]}
            curve={shape.curveNatural}
            showGrid={true}
          />
        </View>
        <Legand
          items={[
            {
              label: Trans.totalRecovered,
              color: colors.recoveredColor,
              value: _item.TotalRecovered,
            },
            {
              label: Trans.totalConfirmed,
              color: colors.confirmedColor,
              value: _item.TotalConfirmed,
            },
            {
              label: Trans.totalDeaths,
              color: colors.DeathColor,
              value: _item.TotalDeaths,
            },
          ]}
        />
      </Card>
    );
  };
  if (!entities?.data?.length) return null;
  return (
    <Container style={styles.body}>
      <View style={styles.itemCardBody}>
        <FlatList
          data={entities.data}
          refreshing={loading === 'pending'}
          initialNumToRender={10}
          onRefresh={fetchData}
          renderItem={CountryItemData}
          ListEmptyComponent={renderEmpty}
          ListHeaderComponent={HeaderComponent}
          contentContainerStyle={{flexGrow: 1}}
          ItemSeparatorComponent={renderSeperator}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {padding: 5, backgroundColor: colors.bg},
  itemCardBody: {alignItems: 'center'},
  chartBody: {height: '80%', width: '100%'},
  primaryText: {fontSize: 20, fontWeight: 'bold'},
  cardTitleBody: {alignItems: 'center', paddingVertical: 10},
  chartBody: {borderColor: 'gray', borderBottomWidth: 1, height: 200},
  headerBody: {height: 350, marginVertical: 5},
});
