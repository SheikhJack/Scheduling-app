import { View, Text, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Payments() {
  return (
    <LinearGradient
      colors={['#3EA5D5', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, flexDirection: 'column' }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:"center",padding: 5}}>
          <FontAwesome name="shopping-bag" size={34} color="white" style={{ padding: 20, position: 'relative' }} />
          <Text style={{ backgroundColor: 'red', color: 'white', borderRadius: 100, height: 20, width: 20, textAlign: 'center', position: 'absolute', justifyContent:'center', marginTop:20, right:10 }}>1</Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 900, fontSize: 20, color: 'white', margin: 30 }}>CONFIRM TRIP</Text>
      </View>
      <View style={{ height: '20%', width: '95%', backgroundColor: '#f6f6f6', borderRadius: 20, marginTop: 10, margin: 'auto', padding: 10 }}>
        <View style={{ margin: 'auto' }}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: 'grey'}}>Departure: Gaborone - Francistown</Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: 'grey'}}>Departure Date: March 20, 2025</Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: 'grey'}}>Departure Time: 08:00</Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: 'grey'}}>Bus Operator: TeePee Express</Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: 'grey'}}>Seat Number: A12</Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 250, gap: 20 }}>
        <Pressable
          style={{ height: 40, width: 100, borderRadius: 30, backgroundColor: '#1A526C', }}
        >
          <Text style={{ fontWeight: 'bold', textAlign: 'center', margin: 'auto', color: 'white' }}>CONFIRM</Text>
        </Pressable>
        <Pressable
          style={{ height: 40, width: 100, borderRadius: 30, backgroundColor: '#1A526C', }}
        >
          <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white', margin: 'auto',padding: 5 }}>TO CART</Text>
        </Pressable>
      </View>
    </LinearGradient>

  );
}


