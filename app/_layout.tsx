import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabLayout from './(tabs)/_layout'; // Tabs Navigator
import Chat from './chat';
import GenerateInvoice from './generateInvoce';
import Settings from './settings';
import LogOut from './logOut';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true, // Show headers for all screens
          drawerStyle: {
            backgroundColor: '#293846', // Drawer background color
          },
        }}
      >

        {/* Tabs as one of the drawer items */}
        
        <Drawer.Screen
          name="Tabs"
          component={TabLayout}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />

        {/* Additional drawer screens */}
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{
            drawerLabel: 'Chat',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="chat" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="GenerateInvoice"
          component={GenerateInvoice}
          options={{
            drawerLabel: 'Generate Invoice',
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="file-invoice" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="LogOut"
          component={LogOut}
          options={{
            drawerLabel: 'Logout',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="logout" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
