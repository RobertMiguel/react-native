import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

export default function AccountScreen({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Account</Text>
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