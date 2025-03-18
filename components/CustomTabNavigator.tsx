import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const PRIMARY_COLOR = "black";
const SECONDARY_COLOR = "white";

const CustomTab: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ gap: 20, flexDirection: 'row', position: 'absolute', bottom: 30, alignSelf: 'center', width: "80%", backgroundColor: '#293846', borderRadius: 30, justifyContent: 'center', alignItems: 'center', padding: 12, shadowColor: 'grey',shadowOffset: {width: 0, height: 5}, shadowOpacity: 0.3, shadowRadius: 5 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.pressable, { backgroundColor: isFocused ? SECONDARY_COLOR : "transparent" }]}
          >
            {getIconByRouteName(route.name, isFocused ? PRIMARY_COLOR : SECONDARY_COLOR)}
            {isFocused && <Text style={{ color: PRIMARY_COLOR, marginLeft: 8, }}>
              {label as string}
            </Text>}
          </PlatformPressable>
        );
      })}
    </View>
  );
  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
        case "house":
      return <AntDesign name="home" size={24} color={color} />
      case "payments":
        return <AntDesign name="creditcard" size={24} color={color} />;
      
      case "profile":
        return <AntDesign name="user" size={24} color={color} />;
      
    }
  }
}


const styles = StyleSheet.create({
  pressable: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 30
  }
})

export default CustomTab

