import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './components/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cookie': require('./assets/fonts/Cookie-Regular.ttf'),
  });

  return (
    <View style={{ marginTop: 40 }}>
      <StatusBar style="dark" hidden={false} />
      <Home />
    </View>
  );
}