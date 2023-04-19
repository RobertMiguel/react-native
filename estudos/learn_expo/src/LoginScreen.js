import React, { useState } from 'react'
import { View, TextInput, SafeAreaView ,StyleSheet, TouchableOpacity, Text, TextInputComponent } from 'react-native'

import ImageViewer from './ImageViewer'

// LoginScreen 
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        console.log("Você clicou")
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.register}>
                <Text style={styles.register}>Já tem conta? <Text style={styles.linkRegister}>Register</Text></Text>
            </View>

            <ImageViewer style={styles.logo}/>

            <View>
                <Text style={styles.header}>Bem-vindo</Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.container}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        justifyContent:'center',
        alignItems: 'center',
        flex: 1
    }
})

export default LoginScreen