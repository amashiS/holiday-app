import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import home from '../assets/home.png'
import folder from '../assets/folder.png'
import bell from '../assets/bell.png'
import Bbell from '../assets/Bbell.png'
import user from '../assets/user.png'
import Bhome from '../assets/Bhome.png'
import Bfolder from '../assets/Bfolder.png'
import Buser from '../assets/Buser.png'




const NavBar = () => {
  const [iconClick, setIconClick] = useState('home')


  const NavIcon = (props) => {



    return (
      <View>
        {iconClick == props.title ? (

          <TouchableOpacity onPress={() => { setIconClick(props.title) }}>
            <View>
              <Image style={styles.homeStyle} source={props.bImage} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => { setIconClick(props.title) }}>
            <Image style={styles.homeStyle} source={props.gImage}></Image>
          </TouchableOpacity>
        )}

      </View>
    )

  }



  return (
    <View style={styles.pageStyle}>
      <View style={styles.navbarStyle}>

        <NavIcon title="home" gImage={home} bImage={Bhome} />

        <NavIcon title="folder" gImage={folder} bImage={Bfolder} />

        <NavIcon title="bell" gImage={bell} bImage={Bbell} />

        <NavIcon title="user" gImage={user} bImage={Buser} />

      </View>

    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: '#F9F9F9',

  },
  navbarStyle: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 33,
    bottom: 10,
    justifyContent: 'space-between'
  },
  homeStyle: {
    width: 27,
    height: 27,

  },
  
})