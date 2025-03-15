
import React from 'react';
import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomTab from '@/components/CustomTabNavigator';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
<Tabs
      screenOptions={{
        headerShown: false, // Hide header inside tabs
      }}
      tabBar={(props) => <CustomTab {...props} />}
      >
      
      <Tabs.Screen
        name="mybookings"
        options={{
          title: 'Bookings',
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>

  );
}
