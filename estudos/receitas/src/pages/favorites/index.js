import { View, Text, StyleSheet } from 'react-native'

export function Favorites() {
    return(
        <View>
            <Text style={styles.container}>Página de Favoritos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
    }
})