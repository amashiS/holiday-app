import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from './Data.json'

const Map = () => {
  return (
    <View>
      {  Data.map (city=>(
        <View>
            <Text>{city.name}</Text>
            </View>

        ))
      }
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})