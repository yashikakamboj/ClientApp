import React from 'react';
import  { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoutScreen from './LogoutScreen';
import ProfileScreen from '../screens/profileStack/ProfileScreen';
import OrderHistoryScreen from '../screens/orderHistoryStack/OrderHistory';
import HomeScreen from '../screens/homeStack/HomeScreen';

const Tab = createBottomTabNavigator();

const MainTabScreen = ({ navigation }) => (
   
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#fff',
      style:{
      position:'absolute',
      bottom: 25,
      left:20,
      right: 20,
      backgroundColor:'#333',
      borderRadius: 50,
      height:50,
      }
    }}
  >
    
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({  color }) => (
          <Icon name="ios-home" color={color} size={26} />
          ),
            }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarLabel: 'OrderHistory',
          tabBarIcon: ({ color }) => (
            <Icon name="wallet" color={color} size={26} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({  color }) => (
          <Icon name="ios-person" color={color} size={26} />
          ),
            }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;
