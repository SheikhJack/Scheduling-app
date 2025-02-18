import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export const WhatsNewCard = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.subCard}>
                    <Image source={require('../assets/images/shakawe.jpeg')} style={styles.image} />
                    <View style={styles.text}>
                        <Text style={styles.textText}>{item.title}</Text>
                        <Text >{item.description}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    card: {
       
        width: 84,
        height: 143,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 10, // Adds spacing between cards
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    subCard: {
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'space-between',
        width: 80,
        height: 92,
    },
    image: {
        width: 78,
        height: 66,
        margin: 2,
        resizeMode: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    text: {
        flexDirection: 'column',
        fontSize: 10,
        fontWeight: 'bold'
    },
    textText:{
        fontSize: 15,
        fontWeight: 'bold'
    },

})

