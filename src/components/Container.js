import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

const Container = memo(({children, style, ...rest}) => {
  return (
    <View {...rest} style={{...styles.body, ...style}}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});

export {Container};
