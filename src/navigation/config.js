import React from 'react';
import {StyleSheet, Appearance} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

//screens
import {Dashboard} from '../features/dashboard';
import {Countries, CountryDetails} from '../features/countries';

const HomeNavigation = () => {
  const themeState = Appearance.getColorScheme();

  const HomeStack = createStackNavigator();
  const HomeTab = createBottomTabNavigator();
  const HomeMatTab = createMaterialTopTabNavigator();
  const Root = () => {
    return (
      <HomeStack.Navigator initialRouteName="Countries">
        <HomeStack.Screen
          name="Countries"
          options={{headerShown: false}}
          component={Countries}
        />
        <HomeStack.Screen name="CountryDetails" component={CountryDetails} />
      </HomeStack.Navigator>
    );
  };

  return (
    <SafeAreaView style={{...styles.body}}>
      <NavigationContainer
        theme={themeState === 'dark' ? DarkTheme : DefaultTheme}>
        <HomeMatTab.Navigator tabBarPosition="bottom" lazy={true}>
          <HomeMatTab.Screen
            name="world"
            options={{title: 'Dashbaord'}}
            component={Dashboard}
          />
          <HomeMatTab.Screen
            name="countries"
            options={{title: 'Countries'}}
            component={Root}
          />
        </HomeMatTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({body: {flex: 1}});
export {HomeNavigation};
