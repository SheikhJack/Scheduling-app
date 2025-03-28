import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'


interface CardProps {
    item: {
      title: string;
      description: string;
      
    };
  }

export const WhatsNewCard = ({ item }: CardProps) => {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.subCard}>
                    <Image source={require('../assets/images/shakawe.jpeg')} style={styles.image} />
                    <View style={styles.text}>
                        <Text style={styles.textText}>{item.title}</Text>
                        <Text style={styles.textSmall}>{item.description}</Text>
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
        width: 80,
        height: 82,
        margin: 2,
        resizeMode: 'cover',
        borderRadius: 15

    },
    text: {
        flexDirection: 'column',
        fontSize: 10,
        fontWeight: 'bold'
    },
    textText:{
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 6,
        color: 'grey'
    },
    textSmall:{
        fontSize: 9,
        fontWeight: 'regular',
        marginLeft: 6

    }

})

