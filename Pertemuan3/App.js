import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemImage from './components/ItemImage';
import ItemTypograp from './components/ItemTypograp';
import No2 from './components/No2';
import No3 from './components/No3';
import No4RCC from './components/No4RCC';
import No4RFC from './components/No4RFC';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} backgroundColor="white" />
      <No4RFC />
      <No4RCC />
    </View>
  );
}