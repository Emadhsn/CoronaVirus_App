import React from 'react';
import {View, StyleSheet} from 'react-native';
import numeral from 'numeral';

import {Text} from './Text';

const Legand = ({items}) => {
  return (
    <View style={styles.body}>
      {items?.map((item, index) => (
        <View key={index} style={{...styles.itemBody}}>
          <Text style={{color: item?.color}}>{item?.label}</Text>
          <Text style={{...styles.primaryText, color: item?.color}}>
            {numeral(item?.value).format('0,0')}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBody: {alignItems: 'center'},
  primaryText: {fontSize: 20, fontWeight: 'bold'},
});

export {Legand};
