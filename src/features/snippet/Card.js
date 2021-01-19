import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../../theme';

const Card = memo(({children, style, ...rest}) => {
  return (
    <View
      style={{...styles.body, ...styles.shadow, ...style}}
      color={colors.loaderColor}
      {...rest}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 135,
    borderRadius: 15,
    padding: 20,
  },
  shadow: {
    shadowColor: '#00000001',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 2,
  },
});
export {Card};
