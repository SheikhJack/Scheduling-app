import Card from '@/components/Card';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Pressable,
  FlatList
} from 'react-native';



export default function HomeScreen() {

  const destinations = [
    {
      startLocation: 'Gaborone',
      startTime: '20:00',
      endLocation: 'Maun',
      endTime: '05:00',
    },
    {
      startLocation: 'Francistown',
      startTime: '18:00',
      endLocation: 'Kasane',
      endTime: '04:00',
    },
    {
      startLocation: 'Francistown',
      startTime: '18:00',
      endLocation: 'Kasane',
      endTime: '04:00',
    },
    {
      startLocation: 'Francistown',
      startTime: '18:00',
      endLocation: 'Kasane',
      endTime: '04:00',
    },
  ];


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Container}>
        <View style={styles.topBar}>
          <View style={styles.menuBar}>
            <MaterialIcons name="menu" size={30} color="white" />
          </View>
          <View style={styles.imageBar}>
            <Text style={styles.imageText}>Hi Kido</Text>
            <Image source={require('../../assets/images/potrait.jpg')} style={styles.image} />
          </View>
        </View>
        <View style={styles.middlePart}>
          <Text style={styles.middlePartText}>Where do you want to go?</Text>
          <View style={styles.searchContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.fromText}>From</Text>
              <View style={styles.inputIconContainer}>
                <MaterialIcons name='search' size={30} style={styles.person} />
                <TextInput
                  placeholder='Search'
                  style={styles.input1}
                />
              </View>
              <Text style={styles.toText}>To</Text>
              <View style={styles.inputIconContainer}>
                <MaterialIcons name='search' size={30} style={styles.person} />
                <TextInput
                  placeholder='Search'
                  style={styles.input1}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <Pressable style={styles.button}
          >
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>
        </View>
        <View style={styles.thirdPart}>
          <View style={styles.thirdPartText}>
            <Text style={styles.popularText}>POPULAR DESTINATIONS</Text>
            <Text style={styles.viewAllText}>View All</Text>
          </View>

        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {destinations.map((destination, index) => (
            <Card key={index} item={destination} />
          ))}
        </ScrollView>
        <View style={styles.fouthPart}>
          
        </View>
        <View style={styles.firthPart}>
          <Pressable>
            <Text style={styles.whatsNewText}>What's New</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.discoverText}>Discover Buses and routes</Text>
          </Pressable>
          <ScrollView>
            
          </ScrollView>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);',
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 32,
    marginLeft: 18,
    marginRight: 18,
  },
  menuBar: {},
  imageBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  imageText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#FFFFFF"
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: '50%'
  },
  middlePart: {
    marginTop: 42,
    gap: 22,
  },
  middlePartText: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  searchContainer: {
    height: 286,
    width: 394,
    backgroundColor: '#293846',
    margin: 'auto',
    borderRadius: 15
  },
  innerContainer: {
    margin: 'auto',
    height: 200,
    width: 325,
    gap: 9

  },
  fromText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  toText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },
  input1: {
    backgroundColor: '#D9D9D9',
    width: 325,
    height: 46,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input2: {
    backgroundColor: '#D9D9D9',
    width: 325,
    height: 36,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#1A526C',
    height: 66,
    width: 295,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  search: {
    margin: 'auto',
    marginTop: -40,
    height: 66,
  },
  thirdPart: {

  },
  thirdPartText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 75
  },
  popularText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#FFFFFF'
  },
  scrollContent: {
    paddingHorizontal: 5,
    paddingVertical: 5,

  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    width: 325,
    height: 46,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  person: {
    color: 'grey'
  },
  fouthPart: {
    margin: 36,
    borderWidth: 1 
  },
  firthPart: {
    flexDirection: 'column',
  },
  whatsNewText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 15,
    marginBottom: 6,
  },
  discoverText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 15,
  }


});
