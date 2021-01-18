import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Alert, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Card, Input} from '../../components';
import {colors} from '../../theme';
import {
  selectDashboard,
  dashboardRequest,
  searchByNameAction,
} from '../dashboard/dashboardSlice';
import {HeaderData} from './HeaderData';
import {ItemData} from './ItemData';

import SearchIcon from '../../assets/icons/search.png';
import CancelIcon from '../../assets/images/cancel.png';

export const Countries = ({navigation}) => {
  const {error, entities, loading} = useSelector(selectDashboard);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const handelSearch = (txt) => {
    dispatch(searchByNameAction(txt));
  };

  useEffect(() => {
    searchRef?.current?.focus();
  }, []);
  useEffect(() => {
    if (error) {
      Alert.alert(error?.message);
    }
  }, [error]);

  return (
    <Container style={styles.body}>
      <Card style={styles.searchBody}>
        <Input
          ref={searchRef}
          onChangeText={handelSearch}
          Icon={SearchIcon}
          placeholder={'Search'}
          style={styles.inputBody}
        />
      </Card>
      <FlatList
        data={entities?.Countries}
        refreshing={loading === 'pending'}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        onRefresh={() => dispatch(dashboardRequest())}
        renderItem={({item, index}) => (
          <ItemData
            key={index}
            item={item}
            onPress={() => navigation.navigate('CountryDetails', {_item: item})}
          />
        )}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={HeaderData}
        ItemSeparatorComponent={renderSeperator}
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={(_, index) => index.toString()}
      />
    </Container>
  );
};

export const renderEmpty = () => {
  return (
    <View style={styles.emptyBody}>
      <View style={styles.imageBody}>
        <Image source={CancelIcon} style={styles.cancelBody} />
      </View>
    </View>
  );
};
export const renderSeperator = () => <View style={styles.seperator} />;

const styles = StyleSheet.create({
  searchBody: {
    height: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {padding: 5, backgroundColor: colors.bg},
  seperator: {
    borderColor: colors.borderColor,
    borderWidth: 0,
    marginTop: 5,
  },
  emptyBody: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBody: {
    width: 100,
    height: 100,
  },
  cancelBody: {width: 100, height: 100, resizeMode: 'contain'},
});
