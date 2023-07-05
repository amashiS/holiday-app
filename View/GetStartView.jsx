import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import wall from '../assets/Wallpaper.jpeg'
import { useNavigation } from '@react-navigation/native'

const GetStartView = () => {

    const navigation = useNavigation()


    return (
        <View style={styles.bg}>
            <ImageBackground
                source={wall}
                style={styles.img} >
                <View style={styles.StackStyle} >
                    <Text style={styles.titleLine}> Book Your </Text>
                    <Text style={styles.titleLine}>   Next  Journey </Text>

                    <Text style={styles.secoundTitle}> Let's get you started </Text>

                    <TouchableOpacity style={styles.btnStyle} onPress={() => { navigation.navigate('info') }}>
                        <Text style={styles.btnText}> Get started </Text>
                    </TouchableOpacity>
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
        justifyContent: 'flex-end',

    },
    bg: {
        width: '100%',
        height: '100%',
    },
    titleLine: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor: '#fff'
    },
    secoundTitle: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        textShadowColor: '#fff'


    },
    btnStyle: {
        backgroundColor: '#005EFB',
        width: 300,
        height: 65,
        marginTop: 70,
        borderRadius: 50,
        alignSelf: 'center',
        padding: 25


    },
    btnText: {
        fontSize: 17,
        fontWeight:500,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center'

    },
    StackStyle: {
        bottom: 90
    }
})