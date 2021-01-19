import React from 'react';
import {Controller} from 'react-hook-form';

import {colors} from '../../theme';
import {MatInput} from './MatInput';

const InputController = ({
  style,
  inputStyle,
  name,
  rules,
  control,
  defaultValue,
  inputRef,
  ...rest
}) => {
  return (
    <Controller
      {...{name, control, defaultValue, rules}}
      render={({onChange, onBlur, value, ref}) => (
        <MatInput
          onBlur={onBlur}
          ref={ref}
          onChangeText={(text) => {
            onChange(text);
          }}
          value={value}
          {...rest}
        />
      )}
    />
  );
};

export {InputController};
