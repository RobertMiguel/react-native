import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen'
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  );
}