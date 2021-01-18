import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../theme';

const Card = memo(({children, style, ...rest}) => {
  return (
    <View
      style={{...styles.body, ...style}}
      color={colors.loaderColor}
      {...rest}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#efefef90',
    width: '100%',
    height: 100,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#00000020',
    borderWidth: 0.5,
  },
  shadow: {
    shadowColor: '#00000005',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,

    elevation: 5,
  },
});
export {Card};
