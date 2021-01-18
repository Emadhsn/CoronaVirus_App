import React, {memo, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

const Collapse = memo(({Header, Body, onPress, style, ...rest}) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setVisible(!isVisible);
          onPress && onPress();
        }}
        style={{
          flex: 1,
          width: '100%',
        }}>
        <Header />
      </TouchableOpacity>
      {isVisible ? (
        <View style={{marginStart: '15%', marginTop: 5, width: '100%'}}>
          <Body />
        </View>
      ) : null}
    </>
  );
});

export {Collapse};
