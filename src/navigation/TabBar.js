import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 70,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const [width, setWidth] = useState(null);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center', position: 'relative'}}>
            <Text
              onLayout={(event) => {
                setWidth(event.nativeEvent.layout.width);
              }}
              style={{
                color: isFocused ? 'orange' : '#00000090',
                fontWeight: 'bold',
              }}>
              {label}
            </Text>
            {isFocused ? <BorderBottom style={{width: width}} /> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BorderBottom = ({style}) => {
  return <View style={{...styles.borderBottomBody, ...style}}></View>;
};
const styles = StyleSheet.create({
  borderBottomBody: {
    height: 4,
    marginTop: 4,
    backgroundColor: 'orange',
    borderRadius: 10,
    position: 'absolute',
    bottom: -7,
  },
});
