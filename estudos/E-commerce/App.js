import CartScreen from './src/Screens/CartScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <CartScreen/>
    </NativeBaseProvider>
  );
}