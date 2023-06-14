import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='go to about' onPress={()=>navigation.navigate('About')}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})