import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Notify from '../View/Notify.json'
import Noti from '../assets/Noti.png'

const NotificationPage = () => {





  return (
    <View style={styles.NotifiStyle}>

      <View style={{ marginEnd: 15, flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center'}}>
        <Text style={styles.NotifiTextStyle}>Notifications</Text>
        <Image source={Noti} style={styles.bell} />
      </View>
      
      <ScrollView style={styles.fullView} showsVerticalScrollIndicator={false}>


        {
          Notify.map(bar => (

            <View>


              <TouchableOpacity style={styles.fullView} >

                <View style={styles.ViewStyle}>
                  <Text>{bar.notifi}</Text>
                  <Text>{bar.notifi}</Text>
                </View>



              </TouchableOpacity>
            </View>


          ))}

        <View style={{ marginVertical: 35 }}></View>
      </ScrollView>



    </View>
  )
}

export default NotificationPage

const styles = StyleSheet.create({
  NotifiStyle: {
    margin: 20,

  },
  NotifiTextStyle: {
    padding: 20,
    fontSize: 24,
    fontWeight: 700,
  },
  fullView: {
    marginVertical: 7

  },
  ViewStyle: {
    flexDirection: 'row',
    width: "100%",
    height: 100,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 5,


  },
  bell: {
    width: 26,
    height: 26
  }

})