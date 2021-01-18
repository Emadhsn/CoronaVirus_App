import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import numeral from 'numeral';
import {useDispatch} from 'react-redux';

import {Text} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';

import AngleDownIcon from '../../assets/icons/arrow-down.png';
import {sortByAction} from '../dashboard/dashboardSlice';

const HeaderData = ({style, item}) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={{...style, ...styles.body}}>
        {item?.Country ? (
          <Text style={styles.primaryText}>{item?.Country}</Text>
        ) : null}
        <View style={styles.subBody}>
          <TouchableOpacity
            onPress={() => dispatch(sortByAction('rec'))}
            style={{...styles.itemBody}}>
            <Image
              style={{...styles.imageBody, tintColor: colors.recoveredColor}}
              source={AngleDownIcon}
            />
            <Text style={{color: colors.recoveredColor, ...styles.titleBody}}>
              {item?.TotalRecovered
                ? numeral(item?.TotalRecovered).format('0,0')
                : Trans.totalRecovered}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(sortByAction('dth'))}
            style={styles.itemBody}>
            <Image
              style={{...styles.imageBody, tintColor: colors.confirmedColor}}
              source={AngleDownIcon}
            />
            <Text style={{color: colors.confirmedColor, ...styles.titleBody}}>
              {item?.TotalConfirmed
                ? numeral(item?.TotalConfirmed).format('0,0')
                : Trans.totalConfirmed}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(sortByAction('dth'))}
            style={styles.itemBody}>
            <Image
              style={{...styles.imageBody, tintColor: colors.DeathColor}}
              source={AngleDownIcon}
            />
            <Text style={{color: colors.DeathColor, ...styles.titleBody}}>
              {item?.TotalConfirmed
                ? numeral(item?.TotalDeaths).format('0,0')
                : Trans.totalDeaths}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageBody: {
    tintColor: colors.recoveredColor,
    width: 12,
    height: 7,
    marginHorizontal: 3,
  },
  titleBody: {fontSize: 12},
  body: {marginVertical: 10},
  subBody: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBody: {
    alignItems: 'center',
    width: '33.3%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
  },
  primaryText: {fontSize: 15, fontWeight: 'bold', marginVertical: 5},
});

export {HeaderData};
