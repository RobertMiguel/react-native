import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export function GameList({ data }) {

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <Image 
                source={{ uri: data.coverImage }}
                style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{data.title}</Text>
            </View>
            <LinearGradient
                style={styles.gradient}
                colors={['transparent', 'rgba(0,0,0, 0.70)', 'rgba(0,0,0, 0.95)']}
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
    cover:{
        width: '50%',
        height: 200,
        borderRadius: 14,
    },
    info:{
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99
    },
    name:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    description:{
        color: '#fff'
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})