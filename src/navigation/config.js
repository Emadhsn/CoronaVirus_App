import React from 'react';
import {StyleSheet, Appearance, Image, Platform} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

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
import {Deposit, Account, Profile} from '../features/snippet';

import {TabBar} from './TabBar';
import CloseIcon from '../assets/icons/close.png';

export const AccountMatTab = () => {
  const MatTab = createMaterialTopTabNavigator();

  return (
    <MatTab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{...navigatorStyle.matTansTabBar}}>
      <MatTab.Screen name="Profile" component={Profile} />
      <MatTab.Screen name="documentes" component={Deposit} />
    </MatTab.Navigator>
  );
};

const HomeNavigation = () => {
  const themeState = Appearance.getColorScheme();
  const HomeTab = createBottomTabNavigator();

  const DepositMatTab = () => {
    const DepositMatTab = createMaterialTopTabNavigator();

    return (
      <DepositMatTab.Navigator
        initialRouteName="Deposit"
        tabBarOptions={{...navigatorStyle.matTabBar}}
        style={{...navigatorStyle.matBody}}>
        <DepositMatTab.Screen name="Funds" component={Deposit} />
        <DepositMatTab.Screen name="Crypto" component={Deposit} />
      </DepositMatTab.Navigator>
    );
  };

  const DepositStack = () => {
    const HomeStack = createStackNavigator();

    return (
      <HomeStack.Navigator
        initialRouteName="Deposit"
        mode="modal"
        screenOptions={{
          ...navigatorStyle.header,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}>
        <HomeStack.Screen name="Deposit" component={DepositMatTab} />
        <HomeStack.Screen
          name="Account"
          options={{...navigatorStyle.modalheader}}
          component={Account}
        />
      </HomeStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <HomeTab.Navigator
        initialRouteName="Deposit"
        tabBar={(props) => <TabBar {...props} />}>
        <HomeTab.Screen name="Portfolio" component={Account} />
        <HomeTab.Screen name="Deposit" component={DepositStack} />
        <HomeTab.Screen name="Withdraw" component={Account} />
        <HomeTab.Screen name="Trade" component={Account} />
        <HomeTab.Screen name="History" component={Account} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );

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
export const navigatorStyle = {
  modalheader: {
    headerBackImage: () => (
      <Image
        source={CloseIcon}
        style={{width: 14, height: 14, margin: 15, tintColor: '#fff'}}
      />
    ),
    headerTitleAlign: 'left',
    headerBackTitleVisible: false,
  },
  header: {
    headerStyle: {
      backgroundColor: '#081E39',
      borderWidth: 0,
      elevation: 0,
      height: Platform.OS === 'android' ? 65 : 100,
    },
    headerTitleStyle: {color: '#fff'},
  },
  matBody: {backgroundColor: '#081E39'},
  matTabBar: {
    style: {
      backgroundColor: '#081E39',
      borderWidth: 0,
      elevation: 0,
      width: '90%',
      marginHorizontal: '5%',
    },
    indicatorStyle: {
      backgroundColor: 'orange',
      height: 4,
      bottom: -4,
    },
    labelStyle: {fontWeight: 'bold', color: '#fff'},
  },
  matTansTabBar: {
    style: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      width: '90%',
      marginHorizontal: '5%',
    },
    indicatorStyle: {
      backgroundColor: '#081E39',
      height: 4,
      bottom: -4,
    },
    labelStyle: {fontWeight: 'bold', color: '#081E39'},
  },
};
const styles = StyleSheet.create({body: {flex: 1}});
export {HomeNavigation};
