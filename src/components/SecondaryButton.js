import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../theme';

const SecondaryButton = memo(({children, title, ...rest}) => {
  return (
    <TouchableOpacity
      {...rest}
      style={{...styles.shadowBox, backgroundColor: '#000'}}></TouchableOpacity>
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
export {SecondaryButton};
