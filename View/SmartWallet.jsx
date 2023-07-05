import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Us from '../assets/Us.png'
import blue from '../assets/blue.png'
import orange from '../assets/orange.png'
import purple from '../assets/purple.png'
import Masters from '../assets/Masters.png'
import Visa from '../assets/Visa.png'


const FolderPage = () => {
const navigation = useNavigation ();



  return (
    <View style={styles.folderStyle}>
      <View style={styles.RowStyle}>
        <Text style={styles.fldText}>Your Cards</Text>

        <View style={styles.imageStyle}><Image source={Us} style={styles.Img} /></View>
      </View>

      <View style={styles.viewStyle}>

        <TouchableOpacity style={styles.viewAll} onPress={() => navigation.navigate('pay')}>

          <ImageBackground source={blue}  imageStyle={styles.view1}>
            <View style={styles.textStyle}>

              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={styles.textStyle1}>Commercial Bank</Text>
                <Image source={Masters} style={styles.symbol} />
              </View>

              <View style={styles.lineStyle}>
                <Text style={styles.textStyle2}>4  2  0  9   * * * *   * * * *   1 5 0 0</Text>
                <Text style={styles.textStyle3}>Dinith Perera</Text>
              </View>


            </View>

          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewAll} onPress={()=> navigation.navigate('pay')}>
          <ImageBackground source={orange}  imageStyle={styles.view1}>
            <View style={styles.textStyle}>

              <View style={{ flexDirection: 'column', justifyContent: 'center', height: 28 }}>
                <Text style={styles.textStyle1}>Peoples Bank</Text>
                <Image source={Visa} style={styles.symbol} />
              </View>

              <View style={styles.lineStyle}>
                <Text style={styles.textStyle2}>6  3  1  5   * * * *   * * * *   9  3  2  8</Text>
                <Text style={styles.textStyle3}>Dinith Perera</Text>
              </View>


            </View>

          </ImageBackground>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default FolderPage

const styles = StyleSheet.create({
  folderStyle: {
    margin: 20
  },
  fldText: {
    fontSize: 24,
    fontWeight: 700,
    marginVertical: 10


  },
  imageStyle: {
    borderRadius: 50,
    width: 60,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#C4D8EC'
  },
  RowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  Img: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  view1: {
    width: '100%',
    height: 230,
    borderRadius: 20,
    marginVertical: 10,
   shadowColor: '##3883FB',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.35,
   shadowRadius: 4,


  },
  viewAll:{
    width: '100%',
    height: 230,
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: '##3883FB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  

  },
  view2: {
    width: '100%',
    height: 230,
    borderRadius: 20,
    marginVertical: 20,

  },

  viewStyle: {
    marginVertical: 1
  },
  textStyle: {
    padding: 25
  },
  textStyle1: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 600
  },
  textStyle2: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 600,
  },
  textStyle3: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 600,
    marginVertical: 10

  },
  lineStyle: {
    marginVertical: 95
  },
  symbol: {
    width: 60,
    height: 60,
    marginHorizontal: 260,
    marginVertical: -33
  }


})