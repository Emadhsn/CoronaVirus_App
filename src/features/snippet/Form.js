import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {Button} from './Button';
import {InputController} from './InputController';

const Form = ({style, submit, fields}) => {
  const {errors, handleSubmit, control} = useForm({
    reValidateMode: 'onChange',
    mode: 'all',
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const handelSubmitAction = handleSubmit((data) => {
    submit?.action(data);
    return;
  });
  return (
    <ScrollView style={{...styles.body, ...style}}>
      {fields.map((item, index) => {
        switch (item.type) {
          case 'input':
            return (
              <InputController
                {...item}
                error={errors[item?.name]}
                key={index}
                onSubmitEditing={() => handelSubmitAction()}
                name={item.name}
                control={control}
                defaultValue=""
              />
            );

          default:
            break;
        }
      })}

      <View style={{marginTop: 50}}>
        <Button
          title={submit?.title || 'submit'}
          onPress={handelSubmitAction}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {flex: 1},
});

export {Form};
