import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from './Text';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';

const Button = memo(({children, style, titleStyle, colors, title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={{...styles.shadowBox, ...style}}>
      <LinearGradient
        style={{...styles.body, ...style}}
        colors={colors || ['#FF9A00', '#FF9A00', '#FF7A00']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}>
        <Text style={{...styles.title, ...titleStyle}}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  body: {
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.buttonTitleColor,
  },
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderColor: '#ffffff00',
    shadowOpacity: 0.32,
    shadowRadius: 5,

    elevation: 22,
  },
});
export {Button};
