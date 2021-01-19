import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Container} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';
import {Card} from './Card';

const Profile = ({navigation, ...rest}) => {
  return (
    <Container style={styles.body}>
      <Card style={styles.cardBody}>
        <Text style={styles.titleCardBody}>
          Status <Text style={styles.markStyle}>Verified</Text>
        </Text>
        <View>
          <Text style={styles.textCardBody}>Send & receive digtal assets</Text>
          <Text style={styles.textCardBody}>Trade digtal assets</Text>
          <Text style={styles.textCardBody}>Deposit & withdraw money</Text>
        </View>
      </Card>
      <Card style={styles.cardBody}>
        <Text style={styles.titleCardBody}>Weekly limits</Text>
        <View>
          <Text style={styles.textCardBody}>Deposit: 15,000,00 AED</Text>
          <Text style={styles.textCardBody}>withdraw: 15,000,00 AED</Text>
        </View>
      </Card>
      <Card style={styles.cardBody}>
        <Text style={styles.titleCardBody}>Contacts</Text>
        <View>
          <Text style={styles.textCardBody}>Emadxcs@gmail.com</Text>
          <Text style={styles.textCardBody}>+962 795 633 951</Text>
        </View>
      </Card>
      <TouchableOpacity style={styles.supportBody}>
        <Text style={styles.textCardBody}>Change contacts? </Text>
        <TouchableOpacity>
          <Text style={{...styles.textCardBody, fontWeight: 'bold'}}>
            Contact support
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FDFCFA',
    alignItems: 'center',
    padding: 15,
  },
  cardBody: {marginTop: 15},
  titleCardBody: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 'auto',
    color: '#081E39',
  },
  textCardBody: {color: '#081E39'},
  markStyle: {color: '#5AB278'},
  supportBody: {marginTop: 'auto', marginBottom: 'auto', flexDirection: 'row'},
});

export {Profile};
