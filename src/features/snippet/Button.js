import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../components';
import {colors} from '../../theme';

const Button = memo(({style, title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={{...styles.body, ...styles.buttonBody}}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#081E3980',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.buttonTitleColor,
  },
});
export {Button};
