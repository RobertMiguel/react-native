import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer, Route, RouteProp } from '@react-navigation/native'
import {createStackNavigator, StackNavigationProp  } from '@react-navigation/stack'

type RootStackParamList = {
    Home: undefined
    Details : {itemId: number, otherParam: string}
}

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>

type Props = {
    route: DetailsScreenRouteProp
    navigation: DetailsScreenNavigationProp
}

export default function DetailsScreen({ route, navigation }: Props) {

    const {itemId, otherParam} = route.params

    return(
        <View style={styles.container}>
            <Text>itemId : {JSON.stringify( itemId )}</Text>
            <Text>OtherParam : {JSON.stringify( otherParam )}</Text>

            <Button title='Vamos iniciar está página novamente' onPress={() => navigation.push('Details', { itemId, otherParam: 'Produto Atualizado' })}/>
            <Button title='Vamos para página inicial' onPress={() => navigation.navigate('Home')} />
            <Button title='Vamos voltar para primeira página' onPress={() => navigation.popToTop()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
