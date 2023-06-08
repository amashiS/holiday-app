import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import option from '../assets/Option.png'
import search from '../assets/SearchIcon.png'
import plane from '../assets/PlaneIcon.png'

const InfoView = () => {
    return (
        <View >
            <View style={styles.flxStyle}>
                <Image style={styles.opt} source={option} />
                <Text style={styles.TitStyle}> TripWayo </Text>
            </View>
            <View style={styles.searchStyle}>
                <Text style={styles.searchTxt}>  Search here</Text>
                <Image source={search} style={styles.searchIstyle} />
            </View>

            <View style={styles.cardsStyle}>
                <View style={styles.cardOne}>
                    <Image source={plane} style={styles.planeStyle} />
                   

                </View>
                <View style={styles.cardOne}>
                    <Image source={plane} style={styles.planeStyle} />
                   

                </View>
                <View style={styles.cardOne}>
                    <Image source={plane} style={styles.planeStyle} />
                   

                </View>
                <View style={styles.cardOne}>
                    <Image source={plane} style={styles.planeStyle} />
                   

                </View>

            </View>
        </View>
    )
}

export default InfoView

const styles = StyleSheet.create({

    opt: {
        width: 40,
        height: 40
    },
    flxStyle: {
        flexDirection: 'row'
    },
    TitStyle: {
        fontSize: 24,
        color: '#000',
        marginLeft: 10,
        fontWeight: '700'
    },
    searchStyle: {
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        marginTop: 15,
        borderRadius: 50,
        borderColor: '#EDEDED',
        borderWidth: 1,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIstyle: {
        width: 20,
        height: 20,
    },
    searchTxt: {
        fontSize: '20px',
        color: '#ACACAE',
        fontWeight: '600'
    },
    cardsStyle: {
        flexDirection: 'row',
        paddingVertical: 25,
        justifyContent:'space-between'
    },
    cardOne: {
        width: 60,
        height: 60,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        borderColor: '#7A77BD',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center'
    },
    planeStyle: {
        width: 35,
        height: 35

    }

})