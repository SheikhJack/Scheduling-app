import {
  View,
  Text,
  Image,
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
        colors={['#3EA5D5', '#CBC9E8', '#FFFFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.statusBarBackground}>
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
            />
          </View>

          <View style={styles.heading}>
            <View style={styles.circle}>
              <Image
                source={require("../assets/images/bus.svg")}
                style={styles.image}
              />
            </View>
          </View>
          <Text style={styles.welcomeText}>WELCOME TO I-RANK</Text>
          <Text style={styles.searchText}>Search for the Safest Destinations</Text>
          <Pressable style={styles.button}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>
              GET STARTED
            </Text>
          </Pressable>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: '#3ea5d5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);',
    height: "100%"
  },
  heading: {
    marginTop: 68,
    marginBottom: 1,
  },
  circle: {
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    height: 163,
    width: 286,
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  searchText: {
    color: '#0E0E0E', 
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 202,
    textAlign: 'center'
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
    justifyContent: 'center',
  },
});