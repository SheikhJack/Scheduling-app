import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, ScrollViewProps, TouchableOpacity } from 'react-native';
import {  useNavigation, useRouter } from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


export default function DrawerLayout() {

  const router = useRouter();

  return (
    <Drawer>
      <Drawer.Screen
        name="home"
      />
      <Drawer.Screen
        name="chat"
       
      />
    </Drawer>
  );
}
