import RegisterScreen from './src/Screens/RegisterScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  );
}