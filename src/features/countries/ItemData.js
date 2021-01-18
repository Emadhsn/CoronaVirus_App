import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import numeral from 'numeral';

import {Text, Card} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';
import circleIcon from '../../assets/icons/circle.png';

const ItemData = ({style, item, ...rest}) => {
  return (
    <TouchableOpacity style={{...styles.body, ...style}} {...rest}>
      <Card style={{height: 70}}>
        {item?.Country ? (
          <Text style={styles.primaryText}>
            {item?.Country + ` (${item?.CountryCode})`}
          </Text>
        ) : null}
        <View style={styles.subBody}>
          <View style={{...styles.itemBody}}>
            <Image
              style={{...styles.imageBody, tintColor: colors.recoveredColor}}
              source={circleIcon}
            />
            <Text style={{color: colors.recoveredColor}}>
              {numeral(item?.TotalRecovered).format('0,0')}
            </Text>
          </View>
          <View style={styles.itemBody}>
            <Image
              style={{...styles.imageBody, tintColor: colors.confirmedColor}}
              source={circleIcon}
            />
            <Text style={{color: colors.confirmedColor}}>
              {numeral(item?.TotalConfirmed).format('0,0')}
            </Text>
          </View>
          <View style={styles.itemBody}>
            <Image
              style={{...styles.imageBody, tintColor: colors.DeathColor}}
              source={circleIcon}
            />
            <Text style={{color: colors.DeathColor}}>
              {numeral(item?.TotalDeaths).format('0,0')}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {paddingHorizontal: 0},
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
    padding: 5,
  },
  primaryText: {fontSize: 15, fontWeight: 'bold', marginVertical: 5},
});

export {ItemData};
