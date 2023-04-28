import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function GameList({ data }) {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <Image
                source={{ uri: data.coverImage }}
                style={styles.coverImage}
            />
            <View styles={styles.info}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 14
    },
    coverImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    info: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99
    },
    title: {
        fontSize: 7,
        color: '#fff'
    }
})