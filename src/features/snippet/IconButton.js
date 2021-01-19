import React, {memo} from 'react';
import {StyleSheet, Image, Pressable, View} from 'react-native';

import {colors} from '../../theme';

//EM: curently not working within animation
const IconButton = memo(({children, style, Icon, ...rest}) => {
  return (
    <Pressable style={{...styles.body, ...style}} {...rest}>
      {({pressed}) => (
        <View style={styles.text}>
          {pressed ? <View style={styles.presseBody} /> : <></>}
          {Icon ? <Image style={styles.imageBody} source={Icon} /> : null}
        </View>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 5,
    position: 'relative',
  },
  imageBody: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  presseBody: {
    position: 'absolute',
    backgroundColor: '#383D6999',
    borderRadius: 50,
    bottom: -20,
    left: -20,
    height: 60,
    width: 60,
  },
});
export {IconButton};
