import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

import {Container} from '../../components';
import {colors} from '../../theme';
import {Trans} from '../../translation';
import {AccountMatTab} from '../../navigation';

import InfoCircleIcon from '../../assets/icons/info-circle.png';
import SettingsIcon from '../../assets/icons/settings.png';
import userImage from '../../assets/images/user.png';
import {IconButton} from './IconButton';

const Account = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <IconButton style={styles.iconButtonBody} Icon={InfoCircleIcon} />
          <IconButton style={styles.iconButtonBody} Icon={SettingsIcon} />
        </View>
      ),
    });
  }, []);

  return (
    <Container>
      <ScrollView style={styles.body}>
        <View style={styles.userBody}>
          <View style={styles.userFramBody}>
            <Image source={userImage} style={styles.userImageBody} />
          </View>
          <View>
            <Text style={styles.userTitle}>Emad Hasan</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <AccountMatTab />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  userBody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  body: {paddingHorizontal: 0, backgroundColor: '#FDFCFA'},
  closeImgBody: {width: 14, height: 14, margin: 15, tintColor: '#fff'},
  iconButtonBody: {marginHorizontal: 10},
  userImageBody: {
    width: '100%',
    height: '100%',
    borderColor: '#FDFCFA',
    borderWidth: 3,
    borderRadius: 50,
  },
  userFramBody: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: '#58B178',
    borderWidth: 2,
    marginVertical: 15,
  },
  userTitle: {fontWeight: 'bold', fontSize: 16, color: '#081E39'},
});

export {Account};
