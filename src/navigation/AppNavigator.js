import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeDrawer from './HomeDrawer'; // Import the drawer we just made
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GalleryScreen from '../screens/GalleryScreen';

const Tab = createBottomTabNavigator();

// Was getting an error when putting comments in AppNavigator, had the same issue in Task 1
// Couldn't figure out why, maybe some niche error, will research later
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}> 

        <Tab.Screen 
          name="Home" 
          component={HomeDrawer} 
          options={{ 
            headerShown: false, 
          }} 
        />

        <Tab.Screen name="Profile" component={ProfileScreen} />

        <Tab.Screen name="Settings" component={SettingsScreen} />

        <Tab.Screen name="Gallery" component={GalleryScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}