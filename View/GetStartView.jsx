import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import wall from '../assets/Wallpaper.jpeg'
import { ImageBackground } from 'react-native-web'

const GetStartView = () => {
    return (
        <View style={styles.bg}>
            <ImageBackground
                source={wall}
                style={styles.img} >
                <Text style={styles.titleLine}> Book Your Next Journey </Text>
                <Text style={styles.secoundTitle}> Let's get you Stareted </Text>
                <View style={styles.btnStyle} >
                <Text style={styles.btnText}> Get started </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GetStartView

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end',
        paddingBottom:90

    },
    bg: {
        width: '100%',
        height: '100%',

        backgroundColor: '#000'
    },
    titleLine: {
        fontSize: 54,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor:'#fff'
    },
    secoundTitle: {
        fontSize: 27,
        color: 'white',
        textAlign: 'center',
        marginTop: '10px',
        textShadowColor:'#fff'


    },
    btnStyle: {
        backgroundColor: '#005EFB',
        width: 300,
        height: 80,
        marginTop: '70px',
        borderRadius:50,
        alignSelf:'center'
    },
    btnText:{
        fontSize: 27,
        color: 'white',
        textAlign: 'center',
        marginTop: '10px',


    }
})