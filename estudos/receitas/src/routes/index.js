import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes() {
    return(
        <Tab.Navigator
        screenOptions={{ 
            // Mostrar Header
            headerShown: false,
            // Quando abrir o teclado no celular a tabBar vai esconder
            tabBarHideOnKeyboard: true,
            // Tirar o título da tab
            tabBarShowLabel: false,
            //Quando ativar a tab, ficar com a cor definida
            tabBarActiveTintColor: "#121212",

            //Estilização da tabBar

            tabBarStyle:{
                backgroundColor: "#fff",
                borderTopWidth: 0
            }

        }}
        >
            <Tab.Screen 
            name="HomeTab" 
            component={Home}
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" color="000" size={size}/>
                    }
                    return <Ionicons name="home-outline" color={color} size={size} />
                }
            }}
            />
            <Tab.Screen 
            name="Favorites" 
            component={Favorites}
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="heart" color="#ff4141" size={size} />
                    }
                    return <Ionicons name="heart" color={color} size={size} />
                }
            }}
            />
        </Tab.Navigator>
    )
}
