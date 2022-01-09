import React from "react";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="ListingScreen"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator