import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screen/Home'
import GamesScreen from '../screen/Games'
import AccountScreen from '../screen/Account'

import StackRouter from './stackRouter.js'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerTitleStyle: {
          color: '#666666',
          fontWeight: 'bold',
          fontSize: 26
        },
        headerStyle: {
          backgroundColor: '#3c3c3c',
          borderBottomWidth: 0,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 20,
          borderRadius: 90,
          marginHorizontal: 25,
          backgroundColor: '#3c3c3c',
          borderTopWidth: 0,
          elevation: 0
        },
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
        tabBarInactiveTintColor: '#666666',
      })}
    >
      <Tab.Screen
        name='Games'
        children={() => <StackRouter component={ GamesScreen } />}
        options={{
        }}
      />
      <Tab.Screen
        name='Home'
        component={ HomeScreen }
      />
      <Tab.Screen
        name='Account'
        component={ AccountScreen }
      />
    </Tab.Navigator>
  )
}