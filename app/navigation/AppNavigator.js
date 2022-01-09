import React from 'react'
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { color } from 'react-native-reanimated';
import NewListingButton from './NewListingButton';
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");
const { default: ListEditScreen } = require("../screens/ListEditScreen");

const Tab =createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator