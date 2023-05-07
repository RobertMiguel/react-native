import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/Screens/LoginScreen'
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}