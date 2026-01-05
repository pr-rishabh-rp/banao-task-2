// HomeDrawer.js - Drawer navigation nested inside the Home tab
// This drawer is only visible on the Home screen, providing quick access to other sections

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GalleryScreen from '../screens/GalleryScreen';

const Drawer = createDrawerNavigator();

// This could've been handled better and in a smoother manner
// But all I can think of right now is how to use listeners to
// Jump tabs by choosing options on drawers
export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
      {/* 1. The Actual Home Screen (This one actually renders) */}
      <Drawer.Screen 
        name="Dashboard" 
        component={HomeScreen} 
        options={{ title: 'Home' }} 
      />

      {/* 2. The Gallery Link (Switches to Gallery TAB) */}
      {/* Uses listeners to navigate to the main Gallery tab instead of rendering a new screen */}
      <Drawer.Screen 
        name="GoToGallery" 
        component={GalleryScreen} 
        options={{ 
            title: 'Gallery',
            drawerLabel: 'Gallery',
        }}
        listeners={({ navigation }) => ({
            drawerItemPress: (e) => {
                e.preventDefault(); // Stop drawer from rendering the placeholder
                navigation.navigate('Gallery'); // Switch to the Gallery Tab
                navigation.closeDrawer(); // Close the drawer after navigating
            },
        })}
      />

      {/* 3. The Profile Link (Switches to Profile TAB) */}
      {/* Similar to Gallery - intercepts the press and navigates to the main Profile tab */}
      <Drawer.Screen 
        name="GoToProfile" 
        component={ProfileScreen}
        options={{
            title: 'Profile',
            drawerLabel: 'Profile',
        }}
        listeners={({ navigation }) => ({
            drawerItemPress: (e) => {
                e.preventDefault(); // Stop drawer from rendering the placeholder
                navigation.navigate('Profile'); // Switch to the Profile Tab
                navigation.closeDrawer(); // Close the drawer after navigating
            },
        })}
      />
    </Drawer.Navigator>
  );
}