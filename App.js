import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStartView from './View/GetStartView';
import InfoView from './View/InfoView';
import NavBar from './View/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './View/HomePage';
import SmartWallet from './View/SmartWallet';
import NotificationPage from './View/NotificationPage';
import UserPage from './View/UserPage';
import About from './View/About';
import Map from './View/Map.jsx';
import Payment from './View/Payment'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DescriptionPage from './View/DescriptionPage';


export default function App() {
 
  const Stack = createNativeStackNavigator()
  return (


    <View style={styles.container} >

      <StatusBar style="dark" backgroundColor="#fff" />
      <NavigationContainer >
        
        <View style={{flex:1}}>
        <Stack.Navigator 
       screenOptions={{ animationEnabled: false,  gestureEnabled: false,}}>



        <Stack.Screen name="get" component={GetStartView} options={{ headerShown: false }} />

          <Stack.Screen name="info" component={InfoView} options={{ headerShown: false }} />

          <Stack.Screen name="des" component={DescriptionPage} options={{ headerShown: false }} />

          <Stack.Screen name="wallet" component={SmartWallet} options={{ headerShown: false }} />
          <Stack.Screen name="bell" component={NotificationPage} options={{ headerShown: false }} />
          <Stack.Screen name="user" component={UserPage} options={{ headerShown: false }} />
          <Stack.Screen name="pay" component={Payment} options={{ headerShown: false }} />



        </Stack.Navigator>
        </View>

        <NavBar  />

      </NavigationContainer>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
});
