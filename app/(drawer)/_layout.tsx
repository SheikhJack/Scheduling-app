import React, { useEffect, useRef, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import { Animated, Image, Pressable, Text, View } from 'react-native';






function DrawerLayout() {

  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideHeader(true);
    }, 3000); // Hide after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 50], // Scroll distance
    outputRange: [0, -100], // Move up by 100 pixels
    extrapolate: 'clamp',
  });



  return (
    <Drawer
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={() => console.log('Profile Clicked')}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 15, fontWeight: 900, color: '#ffffff'}}>Hi Kido</Text>
              <Image
                source={require('../../assets/images/potrait.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginRight: 15,
                  marginLeft: 5
                }}
              />
            </View>

          </Pressable>
        ),
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
