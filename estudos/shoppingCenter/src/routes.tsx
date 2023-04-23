import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screen/Home'
import DetailsScreen from './screen/Details'

type RootStackParamList = {
    Home: undefined
    Details : {itemId: number, otherParam: string}
}

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>


const Stack = createStackNavigator<RootStackParamList>()

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                    name='Home' 
                    component={ HomeScreen } 
                    options={{ title: 'Jogos Grátis' }}
                />
                <Stack.Screen 
                name='Details'
                component={ DetailsScreen }
                options={({route}) => ({title : route.params.otherParam})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes