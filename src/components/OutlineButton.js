import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from './Text';
import {colors} from '../theme';

const OutlineButton = memo(({children, title, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={{color: colors.secondaryColor}}>{children}</Text>
    </TouchableOpacity>
  );
});

export {OutlineButton};
