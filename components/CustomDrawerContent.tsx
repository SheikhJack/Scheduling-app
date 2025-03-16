import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';


const CustomDrawerContent = (props: any) => {
    const router = useRouter();


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 100, width: 100, borderRadius: 100 }} source={require('../assets/images/potrait.jpg')} />
                    <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 600, marginBottom: 66, textAlign: 'center' }}>Kealeboga K Mosate</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={"Logout"}
                    onPress={() => router.replace('/login')}
                    icon={({ color, size }) => (
                        <MaterialIcons name="logout" size={size} color={color} />
                    )}
                />;
            </DrawerContentScrollView>
            <View style={{
                borderTopColor: '#dde3fe',
                borderTopWidth: 1,
                padding: 20,
                paddingBottom: 20
            }}>
                <Text style={{ fontWeight: 400, textAlign: 'center' }}>
                    Designed&Developed@MoscorpMedia
                </Text>
            </View>
        </View>
    )
}

export default CustomDrawerContent