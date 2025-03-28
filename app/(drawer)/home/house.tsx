import Card from '../../../components/PopularCard';
import { news } from '../../../constants/data';
import { destinations } from '../../../constants/data';
import { WhatsNewCard } from '../../../components/WhatsNewCard';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Pressable,
  SafeAreaView,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';



export default function HomeScreen() {

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50', '75', '90'], [])



  const handleSheetChanges = useCallback(() => {
    console.log('handleSheetChanges')
  }, [])

  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])



  return (
    <BottomSheetModalProvider>
      <LinearGradient
        colors={['#3EA5D5', '#CBC9E8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >

        <ScrollView style={styles.scrollView}
          keyboardShouldPersistTaps="handled">
          <SafeAreaView style={styles.Container}>
            <View style={styles.statusBarBackground}>
              <StatusBar
                translucent={true}
                backgroundColor="transparent"
              />
            </View>
            <View style={styles.Container}>
              <View style={styles.middlePart}>
                <Text style={styles.middlePartText}>Where do you want to go?</Text>
                <LinearGradient
                  colors={['#2981aa', '#293846']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  // style={styles.gradient} 
                  style={styles.searchContainer}
                >
                  <View style={styles.searchContainer}>
                    <View style={styles.innerContainer}>
                      <Text style={styles.fromText}>From</Text>
                      <View style={styles.inputIconContainer}>
                        <MaterialIcons name='search' size={30} style={styles.person} />
                        <TextInput
                          placeholder='Search'
                          style={styles.input1} />
                      </View>
                      <Text style={styles.toText}>To</Text>
                      <View style={styles.inputIconContainer}>
                        <MaterialIcons name='search' size={30} style={styles.person} />
                        <TextInput
                          placeholder='Search'
                          style={styles.input1} />
                      </View>
                    </View>
                  </View>
                </LinearGradient>
                <View style={styles.search}>
                  <Pressable style={styles.button}
                    onPress={handleSnapPress}
                  >
                    <Text style={styles.buttonText}>SEARCH</Text>
                  </Pressable>
                </View>

              </View>
              <View style={styles.fouthPart1}>

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
                  <Text style={styles.whatsNewText}>WHAT'S NEW</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.discoverText}>Discover Buses and routes</Text>
                </Pressable>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.scrollContent}>
                  {news.map((destination, index) => (
                    <WhatsNewCard key={index} item={destination} />
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
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5, textAlign: 'center', color: 'white' }}>Generate PDF</Text>
              </View>
            </View>
            <View style={styles.fifthPart}>

            </View>
            <View >
            </View>
            <BottomSheetModal
              ref={bottomSheetRef}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backgroundStyle={{ backgroundColor: '#D9D9D9' }}
              index={1}
            >
              <BottomSheetView style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}>
                <ScrollView style={{width: '100%'}}>
                  <View style={{ height: 156, backgroundColor: '#ffffff', alignItems:'center', borderRadius: 10}}>
                    <Text>Minimal Test</Text>
                  </View>
                </ScrollView>
              </BottomSheetView>
            </BottomSheetModal>
          </SafeAreaView>
        </ScrollView >
      </LinearGradient>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollView: {
    flexDirection: 'column',
    // backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);',
  },
  statusBarBackground: {
    backgroundColor: '#3ea5d5',
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);',

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
    gap: 22,
  },
  middlePartText: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  searchContainer: {
    height: 286,
    width: 334,
    // backgroundColor: '#293846',
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
    height: 40,
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
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#1A526C',
    height: 46,
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
    marginTop: -20,
    height: 66,
  },
  thirdPart: {
    marginTop: 60
  },
  thirdPartText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 45
  },
  popularText: {
    fontSize: 16,
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
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    textShadowRadius: 20

  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    width: 250,
    height: 40,
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
    margin: 16,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  firthPart: {
    flexDirection: 'column',
  },
  whatsNewText: {
    fontSize: 16,
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
    borderWidth: 1,
    borderColor: 'lightgrey'

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
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: .3,
    textShadowRadius: 20
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
    fontWeight: 'bold',
    color: 'grey'
  },
  details: {
    fontSize: 10,
    fontWeight: '300',
    color: 'grey'

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
  fouthPart1: {
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'lightgrey',
    bottom: -68
  }
});
