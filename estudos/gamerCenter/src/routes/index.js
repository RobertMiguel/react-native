import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screen/Home'
import GamesScreen from '../screen/Games'
import AccountScreen from '../screen/Account'

import StackRouter from './stackRouter'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Games') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen
        name='Games'
        component={ StackRouter }
        options={{
          headerTitleStyle:{
            fontWeight: 'bold'
          }
        }}
      />
      <Tab.Screen
        name='Home'
        component={ StackRouter }
      />
      <Tab.Screen
        name='Account'
        component={ StackRouter }
      />
    </Tab.Navigator>
  )
}