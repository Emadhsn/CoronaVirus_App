import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';

import {colors} from '../theme';

const Loader = memo((props) => {
  return <ActivityIndicator color={colors.loaderColor} {...props} />;
});

export {Loader};
