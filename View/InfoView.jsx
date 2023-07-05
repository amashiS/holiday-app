import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import option from '../assets/Option.png'
import search from '../assets/SearchIcon.png'
import plane from '../assets/PlaneIcon.png'
import bus from '../assets/BusIcon.png'
import train from '../assets/TrainIcon.png'
import car from '../assets/CarIcon.png'
import london from '../assets/london.jpg'
import { useNavigation } from '@react-navigation/native'
import Data from './Data.json'
import TopAdv from './TopAdv.json'
import SearchBar from '../View/SearchBar.jsx'



const InfoView = () => {

    const navigation = useNavigation()
   
      
    

    return (
        <View style={styles.fullStyle}>
            <View style={styles.flxStyle}>
                <Image style={styles.opt} source={option} />
                <Text style={styles.TitStyle}> TripWayo </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>


            <SearchBar  />
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
                            Popular Destinations
                        </Text>
                        <Text style={styles.SeeStyle}> See all </Text>
                    </View>

                </View>


                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ gap: 13, }}>


                    {
                        Data.map(city => (
                            <View style={styles.DesStyle}>


                                <TouchableOpacity style={styles.cardImageOne} onPress={() => navigation.navigate('des', { city })}>
                                    <Image source={{ uri: city.src }} style={styles.LondonStyle} />
                                </TouchableOpacity>


                                <Text style={styles.TxtStyle}>{city.country}</Text>
                                <Text style={styles.ValueStyle}>{city.cost}</Text>
                            </View>

                        ))
                    }



                </ScrollView>
                <View>

                    <View style={styles.destFlexStyle}>
                        <Text style={styles.destStyle}>
                            Top Adventure Trips
                        </Text>
                        <Text style={styles.SeeStyle}> See all </Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ gap: 13 }}>


                        {
                            TopAdv.map(city => (
                                <View style={styles.DesStyle}>


                                    <TouchableOpacity style={styles.cardImageOne} onPress={() => navigation.navigate('des', { city })}>
                                        <Image source={{ uri: city.img }} style={styles.LondonStyle} />
                                    </TouchableOpacity>


                                    <Text style={styles.TxtStyle}>{city.country}</Text>
                                    <Text style={styles.ValueStyle}>{city.cost}</Text>
                                </View>

                            ))
                        }



                    </ScrollView>

                </View>
                <View style={styles.underBar} />

            </ScrollView >



        </View>






    )
}

export default InfoView

const styles = StyleSheet.create({
    fullStyle: {
        padding: 20,
        ackgroundColor: '#FAFAFA',
        flex: 1,


    },

    opt: {
        width: 40,
        height: 40
    },
    flxStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    TitStyle: {
        fontSize: 24,
        color: '#000',
        marginLeft: 10,
        fontWeight: 700
    },
    searchStyle: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        marginTop: 15,
        borderRadius: 50,
        borderColor: '#EDEDED',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    searchIstyle: {
        width: 15,
        height: 15,
    },
    searchTxt: {
        fontSize: 15,
        color: '#ACACAE',
        fontWeight: 600,

    },
    cardsStyle: {
        flexDirection: 'row',
        paddingVertical: 18,
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 13
    },
    cardOne: {
        width: 55,
        height: 55,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        shadowColor: '#6970FE',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cardTwo: {
        width: 55,
        height: 55,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        shadowColor: '#02C9F2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cardThree: {
        width: 55,
        height: 55,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        shadowColor: '#FBB442',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    cardFour: {
        width: 55,
        height: 55,
        backgroundColor: "#FCFAF6",
        borderRadius: 20,
        shadowColor: '#61B3FC',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    planeStyle: {
        width: 23,
        height: 23

    },
    BusStyle: {
        width: 26,
        height: 26

    },
    TrainStyle: {
        width: 22,
        height: 22

    },
    CarStyle: {
        width: 25,
        height: 25

    },
    destStyle: {
        fontSize: 19,
        color: '#000',
        fontWeight: 700,

    },
    destFlexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    SeeStyle: {
        fontSize: 15,
        color: '#8C8987',
        fontWeight: 600,
    },
    cardImage: {
        flexDirection: 'row',
    },
    cardImageOne: {
        width: 150,
        height: 250,
        paddingTop: 15,

    },
    LondonStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 20

    },
    DesStyle: {
        flexDirection: 'column',
        marginRight: 17,
    },
    TxtStyle: {
        fontSize: 14,
        color: '#000',
        paddingTop: 12,
        fontWeight: 600,
        marginLeft: 20
    },
    ValueStyle: {
        fontSize: 13,
        color: '#000',
        fontWeight: 600,
        marginLeft: 20
    },
    underBar: {

        marginVertical: 50
    }


})