import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Bicycle from './components/Bicycle';
import Car from './components/Car';
import Motorcycle from './components/Motorcycle';
import Student from './components/Student';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <StatusBar hidden={false} />
      <Student />
    </ScrollView>
  );
};
