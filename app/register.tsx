import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { router, useNavigation } from 'expo-router';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

interface RootStackParamList {
  navigate(arg0: string): void;
  login: undefined;
  home: undefined;
  href: undefined;
}

interface loginProps {
  login: string;
  href: string;
}



const login: React.FC<loginProps> = ({ login }) => {

  const navigation = useNavigation<RootStackParamList>();

  return (
    <LinearGradient
      colors={['#3EA5D5', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient} 
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require('../assets/images/busv2.png')} />
        </View>
        <Text style={styles.LoginText}>CREATE ACCOUNT</Text>
        <View style={styles.inputDiv}>
          <View style={styles.inputIconContainer}>
            <MaterialIcons name='person' size={25} style={styles.person} />
            <TextInput
              placeholder='Username'
              style={styles.input1}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputIconContainer}>
            <MaterialIcons name='attach-email' size={25} style={styles.person} />
            <TextInput
              placeholder='Email'
              style={styles.input1}
              underlineColorAndroid="transparent"
              secureTextEntry
            />
          </View>
          <View style={styles.inputIconContainer}>
            <MaterialIcons name='key' size={25} style={styles.person} />
            <TextInput
              placeholder='Password'
              style={styles.input1}
              underlineColorAndroid="transparent"
              secureTextEntry
            />
          </View>
          <View style={styles.inputIconContainer}>
            <MaterialIcons name='phone' size={25} style={styles.person} />
            <TextInput
              placeholder='Phone Number'
              style={styles.input1}
              underlineColorAndroid="transparent"
              secureTextEntry
            />
          </View>
        </View>
        
        <Pressable style={styles.button}
        >
          <Link href='/home/house' style={styles.buttonText}>REGISTER</Link>
        </Pressable>
        <Pressable
          onPress={() => router.push('/login')}
        >
          <Text style={styles.createAccText}>if you have an account?{""}{""}{""}{""}
            <Text style={styles.defaultText}>LOGIN</Text>
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  )
}

export default login

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);'
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '36%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: '45%',
    borderBottomLeftRadius: '45%',
    marginBottom: 20
  },
  LoginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    width: 394,
    height: 46,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input1: {
    width: 384,
    height: 46,
    borderColor: 'transparent',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,

  },

  Checkbox: {
    flexDirection: "row",
    alignItems: 'center',
    width: 110,
    justifyContent: 'center'
  },

  inputDiv: {
  },

  checkboxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  tickInputDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    gap: 65,

  },
  rememberMeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 0,
    padding: 0,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1A526C',
    height: 40,
    width: 295,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  createAccText: {
    marginTop: 5,
    marginBottom: 100,
    fontWeight: 'bold',
  },
  defaultText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: "#FFFFFF"
  },
  key: {

  },
  person: {
    color: 'grey'
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
    backgroundColor: '#D9D9D9',
    width: 330,
    height: 46,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  }
},
)