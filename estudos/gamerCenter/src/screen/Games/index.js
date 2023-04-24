import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

export default function GamesScreen({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Games</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#222831',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    }
})