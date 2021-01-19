import React from 'react';
import {StyleSheet} from 'react-native';

import {Container} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';

import {Form} from './Form';

const Deposit = ({navigation}) => {
  const _fields = [
    {
      name: 'name',
      placeholder: 'Name*',
      defaultValue: '',
      returnKeyType: 'next',
      type: 'input',
      rules: {required: true},
    },
    {
      name: 'bankAccount',
      placeholder: 'Bank Account',
      defaultValue: '',
      type: 'input',
      returnKeyType: 'next',
      rules: {
        required: 'Bank Account Holder Name*',
        minLength: {value: 7, message: 'Should be upper than 7 char :)'},
      },
    },
    {
      name: 'bankName',
      placeholder: 'Bank Name*',
      defaultValue: '',
      returnKeyType: 'next',
      type: 'input',
      rules: {required: 'Name should match bank account.'},
    },
    {
      name: 'ipanCode',
      placeholder: 'Ipan or Bank Account Number*',
      defaultValue: '',
      returnKeyType: 'done',
      type: 'input',
      rules: {required: true},
    },
    {
      name: 'swiftCode',
      placeholder: 'Swift/BIC Code*',
      defaultValue: '',
      returnKeyType: 'done',
      type: 'input',
      rules: {required: true},
    },
  ];
  return (
    <Container style={styles.body}>
      <Form
        fields={_fields}
        submit={{
          title: 'NEXT TO ACCOUNT',
          action: () => navigation.navigate('Account'),
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({body: {padding: 10}});

export {Deposit};
