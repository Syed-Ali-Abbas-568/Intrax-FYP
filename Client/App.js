import 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginAs from './src/screens/LoginAs';
import Register from './src/screens/Register';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import RoutePlanner from './src/screens/RoutePlanner';
import DriverEditProfile from './src/screens/DriverEditProfile';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import SideDrawer from "./src/components/SideDrawer"



export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SideDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})
