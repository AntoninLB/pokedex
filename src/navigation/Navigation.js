import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "../views/DetailsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={PokemonStack} />
        <Tab.Screen name="Other" component={PokemonStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
