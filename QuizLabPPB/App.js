import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import RCC from './components/RCC';
import ListScrollView from './components/ListScrollView';
import { Users } from './components/Users';
import ListFlatList from './components/ListFlatList';
import ListSectionList from './components/ListSectionList';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from './components/About';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}