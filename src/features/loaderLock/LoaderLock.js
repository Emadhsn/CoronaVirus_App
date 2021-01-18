import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {Loader, Container} from '../../components';
import {selectLoaderLock} from './loaderLockSlice';

import {colors} from '../../theme';

export const LoaderLock = () => {
  const {loaderState} = useSelector(selectLoaderLock);

  if (loaderState === 'idle') return null;
  return (
    <Container style={styles.body}>
      <Loader />
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.loaderBackground,
    zIndex: 101,
  },
});
