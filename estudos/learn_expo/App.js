// import { StatusBar } from 'expo-status-bar'
// import { Text, View, StyleSheet, Image } from 'react-native'


// import ImageViewer from './src/ImageViewer'
// import Button from './src/Button'


const PlaceholderImageSource = require('./assets/logoGymBro.png')

// export default function App() {
//   return(
//     <View style={styles.container}>
//       <View style={styles.containerImage}>
//         <ImageViewer placeholderImageSource={PlaceholderImageSource}/>
//       </View>
//       <View style={styles.footerContainer}>
//         <Button theme="primary" label={"Escolha uma foto"}/>
//         <Button label={"Oi você aí"} />
//       </View>
//       <StatusBar style='auto'/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   image: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   image: {
//     width: 250,
//     height: 250,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center'
//   }
// })

import React, { useState } from 'react'
import { View, TextInput, SafeAreaView ,StyleSheet, TouchableOpacity, Text, TextInputComponent } from 'react-native'

import ImageViewer from './src/ImageViewer'

// LoginScreen 
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        console.log("Você clicou")
    }

    return(
        <SafeAreaView style={styles.container}>

            <View styles={styles.register}>
                <Text styles={styles.register}>Já tem conta? <Text style={styles.linkRegister}>Register</Text></Text>
            </View>

            <ImageViewer placeholderImageSource={PlaceholderImageSource}/>

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
      
    }    
})

export default LoginScreen