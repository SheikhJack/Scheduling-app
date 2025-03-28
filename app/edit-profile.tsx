import { View, Text, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';



const EditProfile = () => {
  return (
    <LinearGradient
      colors={['#3EA5D5', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, flexDirection: 'column', }}
    >
      <View style={{ marginTop: 80, justifyContent: 'center', width: "100%", height: '30%' }}>
        <View style={{ marginLeft: 110 }}>
          <Image
            source={require('../assets/images/potrait.jpg')}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              justifyContent: 'center'
            }}
          />
          <Feather name="camera" size={24} color="white" style={{marginBottom: 50}} />
        </View>
      </View>
    </LinearGradient>
  )
}

export default EditProfile