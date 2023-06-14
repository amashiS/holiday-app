import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import option from '../assets/Option.png'
import search from '../assets/SearchIcon.png'
import plane from '../assets/PlaneIcon.png'
import bus from '../assets/BusIcon.png'
import train from '../assets/TrainIcon.png'
import car from '../assets/CarIcon.png'
import london from '../assets/london.jpg'


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
                <View style={styles.cardTwo}>
                    <Image source={bus} style={styles.BusStyle} />


                </View>
                <View style={styles.cardThree}>
                    <Image source={train} style={styles.TrainStyle} />


                </View>
                <View style={styles.cardFour}>
                    <Image source={car} style={styles.CarStyle} />


                </View>

            </View>
            <View>

                <View style={styles.destFlexStyle}>
                    <Text style={styles.destStyle}>
                        popular destinations
                    </Text>
                    <Text style={styles.SeeStyle}> See all </Text>
                </View>

            </View>

            <View  >
                <View style={styles.cardImageOne}>

                    <View style={styles.DesStyle}>                    </View>

                    <Image source={london} style={styles.LondonStyle} />
                    <Text style={styles.TxtStyle}>London</Text>
                    <Text style={styles.ValueStyle}>$10000</Text>


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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        justifyContent: 'space-between'
    },
    cardOne: {
        width: 60,
        height: 60,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        borderColor: '#7A77BD',
        boxShadow: ' 0px 2px 4px',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cardTwo: {
        width: 60,
        height: 60,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        borderColor: '#2EB0BF',
        boxShadow: ' 0px 2px 4px',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cardThree: {
        width: 60,
        height: 60,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        borderColor: '#EFC45B',
        boxShadow: ' 0px 2px 4px',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cardFour: {
        width: 60,
        height: 60,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        borderColor: '#67B6EF',
        boxShadow: ' 0px 2px 4px',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    planeStyle: {
        width: 35,
        height: 35

    },
    BusStyle: {
        width: 40,
        height: 40

    },
    TrainStyle: {
        width: 35,
        height: 35

    },
    CarStyle: {
        width: 40,
        height: 40

    },
    destStyle: {
        fontSize: 23,
        color: '#000',
        fontWeight: '700',

    },
    destFlexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SeeStyle: {
        fontSize: 15,
        color: '#8C8987',
        fontWeight: '600',
    },
    cardImage: {
        flexDirection: 'row',
    },
    cardImageOne: {
        width: 170,
        height: 270,
        paddingTop: 15

    },
    LondonStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 20

    },
    DesStyle: {
        flexDirection: 'column'
    },
    TxtStyle: {
        fontSize: 21,
        color: '#000',
        paddingTop: 12,
        fontWeight: '700',
        marginLeft:20
    },
    ValueStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        marginLeft:20
    }


})