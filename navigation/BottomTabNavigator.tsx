import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import OrderTypeScreen from '../screens/OrderTypeScreen';
import OrderRiceScreen from '../screens/OrderRiceScreen';
import OrderBeanScreen from '../screens/OrderBeanScreen';
import OrderProteinScreen from '../screens/OrderProteinScreen';
import OrderSideScreen from '../screens/OrderSideScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Order"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Order"
        component={OrderTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-restaurant" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const OrderTabStack = createStackNavigator<TabOneParamList>();

function OrderTabNavigator() {
  return (
    <OrderTabStack.Navigator>
      <OrderTabStack.Screen
        name="OrderTypeScreen"
        component={OrderTypeScreen}
        options={{ headerTitle: 'Start Your Order' }}
      />
      <OrderTabStack.Screen
        name="OrderRiceScreen"
        component={OrderRiceScreen}
        options={{ headerTitle: 'Pick Rice' }}
      />
      <OrderTabStack.Screen
        name="OrderBeanScreen"
        component={OrderBeanScreen}
        options={{ headerTitle: 'Pick Beans' }}
      />
      <OrderTabStack.Screen
        name="OrderProteinScreen"
        component={OrderProteinScreen}
        options={{ headerTitle: 'Pick a Protein' }}
      />
      <OrderTabStack.Screen
        name="OrderSideScreen"
        component={OrderSideScreen}
        options={{ headerTitle: 'Pick Sides' }}
      />
      <OrderTabStack.Screen
        name="OrderConfirmationScreen"
        component={OrderConfirmationScreen}
        options={{ headerTitle: 'Order Confirmation' }}
      />
    </OrderTabStack.Navigator>
  );
}

const UserTabStack = createStackNavigator<TabTwoParamList>();

function UserTabNavigator() {
  return (
    <UserTabStack.Navigator>
      <UserTabStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </UserTabStack.Navigator>
  );
}
