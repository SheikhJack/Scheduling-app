import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, { useEffect } from 'react';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../assets/images/bus.svg';

interface WelcomeProps {
  login: string;
}

const Welcome: React.FC<WelcomeProps> = ({ login }) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('hidden');
    }
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient
        colors={['#3EA5D5', '#CBC9E8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient} // ✅ Fix: Add style
      >
        <SafeAreaView style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />

          <View style={styles.heading}>
            <View style={styles.circle}>
              <Logo height={286} width={286} />
            </View>
          </View>

          <Text style={styles.welcomeText}>WELCOME TO I-RANK</Text>
          <Text style={styles.searchText}>SEARCH FOR THE SAFEST DESTINATIONS</Text>

          <Pressable style={styles.button} onPress={() => router.push('/login')}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </Pressable>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  gradient: {
    flex: 1, 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  heading: {
    marginBottom: 10,
  },
  circle: {
    marginBottom: 50,
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12, 
  },
  searchText: {
    color: '#0E0E0E',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 30, 
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1A526C',
    height: 46,
    width: 295,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
