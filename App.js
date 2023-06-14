import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStartView from './View/GetStartView';
import InfoView from './View/InfoView';
import NavBar from './View/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import Home from './View/Home';
import About from './View/About';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='About' component={About} />


    //   </Stack.Navigator>

    // </NavigationContainer>
    <View style={styles.container}>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    padding: 20
  },
});
