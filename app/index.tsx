import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable
}
  from 'react-native'

import React from 'react'
import { useNavigation } from 'expo-router';

interface RootStackParamList {
  navigate(arg0: string): void;
  login: undefined; 
  home: undefined;
}

interface WelcomeProps {
  login: string; 
}

const Welcome: React.FC<WelcomeProps> = ({login}) => {

  const navigation = useNavigation<RootStackParamList>();

  return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={styles.circle}>
            <Image source={require('../assets/images/bus.svg')} style={styles.image} />
          </View>
        </View>
        <Text style={styles.welcomeText}>Welcome to I-RANK</Text>
        <Text style={styles.searchText}>Search for the Safest Destinations</Text>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>

  )
}

export default Welcome


const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);'
  },
  heading: {
    marginTop: 68,
    marginBottom: 111,
  },
  circle: {},
  image: {
    height: 361,
    width: 368,
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 62,
  },
  searchText: {
    color: '0E0E0E',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 102,
  },
  button: {
    backgroundColor: '#1A526C',
    height: 66,
    width: 295,
    borderRadius: 30,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  }
})