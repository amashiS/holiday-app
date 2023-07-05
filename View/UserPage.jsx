import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Us from '../assets/Us.png'
import Check from '../assets/Check.png'
import Arrow from '../assets/Arrow.png'
import Crisis from '../assets/Crisis.png'
import Lock from '../assets/Lock.png'
import Help from '../assets/Help.png'
import T from '../assets/T.png'



const UserPage = () => {
  return (
    <View style={{backgroundColor:'#F6F6F6'}}>
    <View style={styles.UserStyle}>
      <View style={styles.UserIStyle}><Image source={Us} style={styles.usStyle} /></View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}><Text style={styles.nameStyle}>Dinith perera  </Text>
        <Image source={Check} style={styles.DoneStyle} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: -7 }}>
        <Text style={styles.mailStyle}>Dinithperera@gmail.com</Text>

      </View>

      <View style={styles.dataStyle}>

        <View style={styles.dataStyle1}>
          <Text style={styles.data}>Email</Text>
          <TouchableOpacity>
            <Image source={Arrow} style={styles.ArrowStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        <View style={styles.dataStyle2}>
          <Text style={styles.data}>Country</Text>
          <TouchableOpacity>
            <Image source={Arrow} style={styles.ArrowStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />




        <View style={styles.dataStyle3}>
          <Text style={styles.data}>Telephone</Text>
          <TouchableOpacity>
            <Image source={Arrow} style={styles.ArrowStyle} />
          </TouchableOpacity>
        </View>




      </View>

      <View>

        <View style={styles.secoundStack}>
        <View style={styles.reusable}>
          <Image source={Crisis} style={styles.Icon} />

          <Text style={styles.data}>   Crisis support</Text>
          </View>
          <TouchableOpacity>
            <Image source={Arrow} style={styles.ArrowStyle1} />
          </TouchableOpacity>
        </View>

        <View style={styles.NewDataStyle}>

          <View style={styles.dataStyle1}>
            <View style={styles.reusable}>
            <Image source={Lock} style={styles.Icon} />

            <Text style={styles.data}>   Change password</Text>
            </View>
            <TouchableOpacity>
              <Image source={Arrow} style={styles.ArrowStyle1} />
            </TouchableOpacity>
          </View>

          <View style={styles.dataStyle2}>
          <View style={styles.reusable}>
            <Image source={Help} style={styles.Icon} />

            <Text style={styles.data}>   Help</Text>
            </View>
            <TouchableOpacity>
              <Image source={Arrow} style={styles.ArrowStyle1} />
            </TouchableOpacity>
          </View>




          <View style={styles.dataStyle3}>
          <View style={styles.reusable}>
            <Image source={T} style={styles.Icon} />

            <Text style={styles.data}>   Trip wayo </Text>
            </View>
            <TouchableOpacity>
              <Image source={Arrow} style={styles.ArrowStyle1} />
            </TouchableOpacity>
          </View>
        </View>




      </View>

    </View>
    </View>
  )
}

export default UserPage

const styles = StyleSheet.create({
  UserStyle: {
    margin: 30,


  },
  UserTxtStyle: {
    margin: 14,
    textAlign: "center",
    fontSize: 19,
    fontWeight: 700
  },
  UserIStyle: {
    width: 110,
    height: 110,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10


  },
  usStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#C4D8EC'

  },
  nameStyle: {
    fontSize: 18,
    marginVertical: 1
  },
  mailStyle: {
    fontSize: 14,
    marginVertical: 6,
    color: '#B2B2B2'
  },
  DoneStyle: {
    width: 13,
    height: 13
  },
  NewDataStyle:{
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  dataStyle: {
    marginVertical: 30,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20
  },
  dataStyle1: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15

  },
  secoundStack: {
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginVertical: -13,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    justifyContent:'space-between',
    marginBottom:30
  },
  dataStyle2: {
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15


  },
  dataStyle3: {
    width: '100%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15

  },
  line: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20

  },
  ArrowStyle: {
    width: 10,
    height: 10
  },
  ArrowStyle1: {
    width: 10,
    height: 10,
    justifyContent: 'flex-end'
  },
  data: {

    fontSize: 14,
    fontWeight: 500
  },
  Icon: {
    width: 30,
    height: 30,
  },
  reusable:{
    flexDirection:'row', 
    alignItems:'center'
  }
})