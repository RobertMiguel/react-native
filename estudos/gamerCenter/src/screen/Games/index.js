import React, {useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import api from '../../services/api'

useEffect(() => {
    async function fetchApi() {
        const response = await api.get('/games')
    }
    fetchApi()
}, [])

export default function GamesScreen() {
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