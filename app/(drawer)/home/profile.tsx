import { View, Text, Image, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const Profile = () => {
  return (
    <LinearGradient
      colors={['#3EA5D5', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, flexDirection: 'column', }}
    >

      {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, margin: 25 }}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#FFFFFF', fontWeight: '800', }}>PROFILE</Text>
        <Feather name="bell" size={24} color="white" />
      </View> */}
      <View style={{ marginTop: 10, justifyContent: 'center', width: "100%" }}>
        <View style={{ marginLeft: 110 }}>
          <Image
            source={require('../../../assets/images/potrait.jpg')}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              justifyContent: 'center'
            }}
          />
          <Pressable style={{ width: 150, height: 45, backgroundColor: '#1A526C', marginLeft: 0, marginTop: 20, borderRadius: 20 }}
            onPress={() => router.push('/edit-profile')}
          >
            <Text style={{ textAlign: 'center', margin: 'auto', color: 'white', fontWeight: 'bold' }}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop: 60, marginLeft: 34, marginRight: 34 }}>
        <View style={{}}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>HeadLine</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white' }}>Popular</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white' }}>Trending</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
          <Text style={{ color: 'white' }}>Today</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </View>
        <View style={{}}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>Preferences</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <Ionicons name="language" size={24} color="white" />
          <Text style={{ color: 'white' }}>Language</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" style={{ marginLeft: 160 }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <MaterialIcons name="dark-mode" size={24} color="white" />
          <Text style={{ color: 'white' }}>DarkMode</Text>
          <MaterialIcons name="arrow-forward" size={24} color="white" style={{ marginLeft: 160 }} />
        </View>
      </View>
    </LinearGradient>
  )
}

export default Profile