import Card from '@/components/PopularCard';
import { news } from '@/constants/data';
import { destinations } from '@/constants/data';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { WhatsNewCard } from '@/components/WhatsNewCard';
import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useRef } from 'react';
import { Drawer } from 'react-native-drawer-layout';
import { useNavigation, DrawerActions } from '@react-navigation/native';
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
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer()); 
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Container}>
        <View style={styles.topBar}>
          <Pressable
            onPress={toggleDrawer} 
          >
            <MaterialIcons name="menu" size={30} color="white" />
          </Pressable>
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
            <Card key={index} item={destinations} />
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}>
            {news.map((destination, index) => (
              <WhatsNewCard key={index} item={news} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.fifthPart}>

        </View>
        <View style={styles.sixthPart}>
          <Text style={styles.sixthtext}>Reciept History</Text>
          <View style={[styles.reciept, styles.elevation]}>
            <View style={styles.recieptHead}>
              {/* reciept head */}
              <Text style={styles.payment}>Payment Total</Text>
              <Text style={styles.pay}>P360.00</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.ddrta}>Date</Text>
              <Text style={styles.details}>31 Dec 23</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.ddrta}>Details</Text>
              <Text style={styles.details}>Kealeboga K Mosate</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.ddrta}>Reference Number</Text>
              <Text style={styles.details}>AO6987456</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.ddrta}>Total Payment</Text>
              <Text style={styles.details}>P340</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.ddrta}>App Fee</Text>
              <Text style={styles.details}>P20.00</Text>
            </View>
          </View>
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
    borderRadius: 1750
  },
  middlePart: {
    marginTop: 42,
    gap: 22,
  },
  middlePartText: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  searchContainer: {
    height: 286,
    width: 334,
    backgroundColor: '#293846',
    margin: 'auto',
    borderRadius: 15
  },
  innerContainer: {
    margin: 'auto',
    padding: 10,
    height: 200,
    width: 325,
    gap: 9

  },
  fromText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  toText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },
  input1: {
    backgroundColor: '#D9D9D9',
    width: 250,
    height: 36,
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
    height: 36,
    width: 295,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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
    width: 250,
    height: 36,
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
  },
  fifthPart: {
    margin: 16,
    borderWidth: 1
  },
  sixthtext: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  reciept: {
    flex: 1,
    flexDirection: 'column',
    height: 133,
    width: 310,
    backgroundColor: 'white',
    margin: 'auto',
    borderRadius: 8,
    padding: 10,
    shadowOpacity: 15,
    boxShadow: ''
  },
  elevation: {
    elevation: 20,
    shadowColor: '#070508',
  },
  sixthPart: {
    marginBottom: 46,
  },
  recieptHead: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 20,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  payment: {
    fontSize: 12,
    fontWeight: '300',
  },
  pay: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  ddrta: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 10,
    fontWeight: '300'
  },
  drawer: {
    backgroundColor: '#fff',
    width: 300,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerButton: {
    color: '#1A526C',
    marginTop: 20,
  },
});
