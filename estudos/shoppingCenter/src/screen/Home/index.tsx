import * as React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer, Route, RouteProp } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
    Home: { post?: string }
    Details: {itemId: number, otherParam: string, post?: string}
    CreatePost: undefined
}
type HomeScreenRouteProp = RouteProp<RootStackParamList>
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type CreatePostNavigationProp = StackNavigationProp<RootStackParamList, 'CreatePost'>
type CreatePostRouterProp = RouteProp<RootStackParamList, 'CreatePost'>

interface CreatePostProp {
    navigation: CreatePostNavigationProp
    route: CreatePostRouterProp
}

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp    
    route: HomeScreenRouteProp
}

export default function HomeScreen({ navigation, route }: HomeScreenProps) {

    React.useEffect(() => {
        if(route.params?.post) {

        }
    }, [route.params?.post])

    return(
        <View style={styles.container}>
            <Text>Home da Página</Text>
            <Button 
                title='Ir para Details'
                onPress={() => {
                    navigation.navigate('Details', {
                        itemId: Math.floor(Math.random() * 100),
                        otherParam: 'Esperando alguma coisa aqui'
                    })
                }}
            />
        </View>
    )
}

function CreatePost({ navigation, route }: CreatePostProp) {

    const [postText, setPostText] = React.useState('')

    return(
        <>
            <TextInput  
                multiline
                placeholder='O que você está pensando ?'
                value={postText}
                style={styles.input}
                onChangeText={setPostText}
            />
            <Button 
                title='Enviar'
                onPress={() => {
                    navigation.navigate({
                        name: 'Home',
                        params: {post: postText},
                        marge: true
                    })
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        height: 200, padding: 10, backgroundColor: 'white'
    }
})