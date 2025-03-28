import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface CardProps {
    item: {
      startLocation: string;
      startTime: string;
      endLocation: string;
      endTime: string;
    };
  }

export default function Card({ item }: CardProps) {
    return (
        <TouchableOpacity >
            <View style={styles.card}>
                <View style={styles.subCard}>
                    <Image source={require('../assets/images/jhz.jpg')} style={styles.image} />
                    <View style={styles.text}>
                        <Text style={styles.textText}>{item.startLocation}</Text>
                        <Text >{item.startTime}</Text>
                        <Text style={styles.textText}>{item.endLocation}</Text>
                        <Text >{item.endTime}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        width: 255,
        height: 120,
        backgroundColor: '#ffffff',
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
        flexDirection: 'row',
        backgroundColor: 'transparent',
        gap: 20,
        justifyContent: 'space-between',
        width: 150,
        height: 118,
    },
    image: {
        width: 150,
        height: 118,
        resizeMode: 'cover',
        borderRadius: 15,
        margin: 1
    },
    text: {
        flexDirection: 'column',
        marginTop: 15,
        fontSize: 10,
        fontWeight: 'bold',
        alignItems:'center',
        marginLeft: -5
    },
    textText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey'
    },

})