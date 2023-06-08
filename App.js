import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStartView from './View/GetStartView';
import InfoView from './View/InfoView';

export default function App() {
  return (
    <View style={styles.container}>
      <InfoView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FBFBFB',
    
    padding:20
  },
});
