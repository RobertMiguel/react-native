import SingleProductScreen from './src/Screens/SingleProductScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProductScreen/>
    </NativeBaseProvider>
  );
}