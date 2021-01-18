import React, {memo} from 'react';
import {Text as TextDefault} from 'react-native';

const Text = memo(({children, style, ...rest}) => {
  return (
    <TextDefault {...rest} style={{...style}}>
      {children}
    </TextDefault>
  );
});

export {Text};
