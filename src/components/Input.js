import React, {forwardRef} from 'react';
import {TextInput, View, Image, StyleSheet} from 'react-native';
import { colors } from '../theme';

const Input = forwardRef(
  (
    {style, type, Icon, inputStyle, name, control, defaultValue, ...rest},
    ref,
  ) => {
    return (
      <View style={{...styles.body, justifyContent: 'center', ...style}}>
        <TextInput
          ref={ref}
          style={{...styles.inputBody, ...inputStyle}}
      
          {...rest}
        />
        {Icon ? <Image style={styles.imageBody} source={Icon} /> : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  imageBody: {
    tintColor: '#ccc',
    width: 20,
    height: 20,
  },
  body: {
    backgroundColor: colors.inputColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    minHeight: 35,
    borderRadius: 10,
  },
  inputBody: {flex: 1},
});
export {Input};
