import React, {useEffect, useState, forwardRef} from 'react';
import {Animated, View, TextInput, StyleSheet, Text} from 'react-native';

import {colors} from '../../theme';

const MatInput = forwardRef(
  ({placeholder, value, onBlur, error, ...rest}, ref) => {
    const [animateValue, _] = useState(new Animated.Value(0));
    const [isFocus, setFocus] = useState(false);

    const translateY = animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -25],
    });

    useEffect(() => {
      Animated.timing(animateValue, {
        toValue: isFocus || value ? 1 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }, [isFocus]);

    return (
      <>
        <View
          style={{
            ...styles.body,
          }}>
          <Animated.Text
            style={{
              ...styles.placeholderBody,
              fontSize: isFocus || value ? 15 : 20,
              transform: [{translateY}],
            }}>
            {placeholder}
          </Animated.Text>
          <TextInput
            style={{
              ...styles.inputBody,
              borderBottomColor: error
                ? 'red'
                : isFocus
                ? '#081E39'
                : '#081E3940',
            }}
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
              onBlur();
            }}
            value={value}
            {...rest}
          />
        </View>
        {error && error?.message ? (
          <View style={{paddingTop: 10}}>
            <Text style={{color: '#081E3980'}}>{error.message}</Text>
          </View>
        ) : null}
      </>
    );
  },
);

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    marginTop: 30,
    overflow: 'hidden',
    height: 65,
  },
  placeholderBody: {
    position: 'absolute',
    color: '#081E3980',
    bottom: 25,
  },
  inputBody: {
    flex: 1,
    fontSize: 22,
    color: '#081E39',
    borderBottomWidth: 0.5,
    minHeight: 50,
    paddingVertical: 10,
  },
});

export {MatInput};
