import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import CustomDrawerContent from '@/components/CustomDrawerContent';






 function DrawerLayout() {

  const router = useRouter();

  return (
    <Drawer
      screenOptions={{
        headerTitle: () => null,
        headerStyle: {
          backgroundColor: '#3ea5d5',
        },
        drawerActiveTintColor: '#3ea5d5',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 16,
        },

        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            color={color}
            size={size}
          />
        ),
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="chat"
        options={{
          title: 'Chat',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'chatbox' : 'chatbox-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="generateInvoice"
        options={{
          title: 'Generate-Invoive',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'} 
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="mybookings"
        options={{
          title: 'My Bookings',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'book' : 'book-outline'} 
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'} 
              color={color}
              size={24}
            />
          ),
        }}
      />

    </Drawer>
  );
}

export default DrawerLayout
