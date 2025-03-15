import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    SafeAreaView,
    StatusBar
  }
    from 'react-native';

  import React, { useState } from 'react'
  import { useNavigation } from 'expo-router';
  
  interface RootStackParamList {
    navigate(arg0: string): void;
    login: undefined;
    home: undefined;
  }
  
  interface WelcomeProps {
    login: string;
  }
  
  const Welcome: React.FC<WelcomeProps> = ({ login }) => {
  
    const [hiddenStatusBar, setHiddenStatusBar] = useState();
  
    const navigation = useNavigation<RootStackParamList>();
  
    return (
      <SafeAreaView>
        <StatusBar 
        hidden={hiddenStatusBar} 
        />
        <View style={styles.container}>
          <View style={styles.heading}>
            <View style={styles.circle}>
              <Image source={require('../assets/images/torino.png')} style={styles.image} />
            </View>
          </View>
          <Text style={styles.welcomeText}>WELCOME TO I-RANK</Text>
          <Text style={styles.searchText}>Search for the Safest Destinations</Text>
          <Pressable style={styles.button}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  
    )
  }
  
  export default Welcome
  
  
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      //marginTop: 50,
      alignItems: 'center',
      backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);'
    },
    heading: {
      marginTop: 68,
      marginBottom: 1,
    },
    circle: {
      marginTop: 50,
      marginBottom: 50
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
      color: '0E0E0E',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 202,
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
      justifyContent: 'center'
    }
  })