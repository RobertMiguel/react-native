import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screen/Home'
import GamesScreen from '../screen/Games'
import AccountScreen from '../screen/Account'

const Stack = createNativeStackNavigator()

export default function StackRouter() {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                    name='Games'
                    component={ GamesScreen }
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={ HomeScreen }
                    options={{
                        title: 'Home'
                    }}
                />
                <Stack.Screen
                    name='Account'
                    component={ AccountScreen }
                    options={{
                        title: 'Account'
                    }}
                />
            </Stack.Navigator>
    )
}