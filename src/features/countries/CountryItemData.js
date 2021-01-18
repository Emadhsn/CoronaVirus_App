import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import numeral from 'numeral';
import moment from 'moment';

import {Text, Card} from '../../components';
import {colors} from '../../theme';
import circleIcon from '../../assets/icons/circle.png';

const CountryItemData = ({style, item, ...rest}) => {
  return (
    <View style={{...styles.body, ...style}} {...rest}>
      <Card style={{height: 70}}>
        <Text style={styles.primaryText}>
          {moment(item.Date).format('dddd DD/MM/YY')}
        </Text>

        <View style={styles.subBody}>
          <View style={{...styles.itemBody}}>
            <Image
              style={{...styles.imageBody, tintColor: colors.recoveredColor}}
              source={circleIcon}
            />
            <Text style={{color: colors.recoveredColor}}>
              {numeral(item?.Recovered).format('0,0')}
            </Text>
          </View>
          <View style={styles.itemBody}>
            <Image
              style={{...styles.imageBody, tintColor: colors.confirmedColor}}
              source={circleIcon}
            />
            <Text style={{color: colors.confirmedColor}}>
              {numeral(item?.Confirmed).format('0,0')}
            </Text>
          </View>
          <View style={styles.itemBody}>
            <Image
              style={{...styles.imageBody, tintColor: colors.DeathColor}}
              source={circleIcon}
            />
            <Text style={{color: colors.DeathColor}}>
              {numeral(item?.Deaths).format('0,0')}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {padding: 0},
  imageBody: {
    tintColor: colors.recoveredColor,
    width: 12,
    height: 12,
    marginHorizontal: 3,
  },
  subBody: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBody: {
    alignItems: 'center',
    width: '33.3%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 0,
  },
  primaryText: {fontSize: 15, fontWeight: 'bold', marginVertical: 5},
});

export {CountryItemData};
