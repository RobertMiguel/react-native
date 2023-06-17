import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react-native'

function LoginScreen() {

    const [text, setText] = useState('')

    return(
        <View style={styles.container}>
                <TextInput 
                    value={text}
                    onChange={() => setText()}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default LoginScreen