import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import london from '../assets/LondonBridge.jpg'
import next from '../assets/Next.png'
import favourite from '../assets/Favourite.png'
import Gfavourite from '../assets/Gfavourite.png'
import { useNavigation, useRoute } from '@react-navigation/native'
import star from '../assets/star.png'
import cloud from '../assets/cloud.png'
import clock from '../assets/Clock.png'
import Gstar from '../assets/GrayStar.png'
import Des from '../View/Des.json'



const DescriptionPage = () => {
    const [favClick, setFavClick] = useState()
    const navigation = useNavigation();
    const [viewClick, setViewClick] = useState()
    const [overClick, setOverClick] = useState(true)
    const route = useRoute();
    const {city} = route.params;



    const DesView = (props) => {




        return (
            <View style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
                <View style={styles.ldnStyle}>

                    <Image source={{uri:city.src2}} style={[styles.ldnImgStyle,{zIndex:1}]} />
                    <TouchableOpacity style={{zIndex:100,position:'absolute',top:60,left:20,width:20,height:20}} onPress={() =>  {navigation.navigate('info') }}>
                        <ImageBackground source={next} style={styles.NextStyle} >
                            
                        </ImageBackground>
                    </TouchableOpacity>




                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                        {
                            favClick == props.tt ? (
                                <TouchableOpacity onPress={() => { setFavClick('hs') }}>
                                    <View>
                                        <Image style={styles.favStyle} source={Gfavourite} />
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => { setFavClick(props.tt) }}>
                                    <View>
                                        <Image style={styles.favStyle} source={favourite} />
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                    </View>
                    <View style={styles.ldnViewStyle}>
                        <Text style={styles.ldnTxtStyle} >{city.country} Tour</Text>



                        {overClick ? (
                            <View>
                                <View style={{ flexDirection: 'row', marginVertical: 20, }}>

                                    <TouchableOpacity onPress={() => setOverClick(true)}>
                                        <Text style={{ fontSize: 15, fontWeight: 600, color: '#1562FB' }}>Overview </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setOverClick(false)}>

                                        <Text style={{ fontSize: 15, fontWeight: 600, marginHorizontal: 70, color: '#CACACA' }}>Reviews </Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between', alignContent: 'center' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={star} style={{ width: 23, height: 23 }} />
                                            <Text style={{ fontSize: 16 }}> 4.5</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={cloud} style={{ width: 23, height: 23 }} />
                                            <Text style={{ fontSize: 16 }}> 16`C</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={clock} style={{ width: 23, height: 23 }} />
                                            <Text style={{ fontSize: 16 }}>  5 hrs</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#E8E8E8' }}>    Rating </Text>
                                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#E8E8E8' }}>    Duration </Text>
                                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#E8E8E8' }}>    Duration </Text>

                                    </View>

                                    <View style={{ marginVertical: 20 }}>
                                        <Text style={{ fontSize: 14, lineHeight: 23 }}>
                                            London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.London has been a major settlement for two millennia, and was originally called Londinium, which was founded by the Romans.
                                        </Text>
                                    </View>
                                </View>


                            </View>

                        ) : (<View>
                            <View style={{ flexDirection: 'row', marginVertical: 20, }}>

                                <TouchableOpacity onPress={() => setOverClick(true)}>
                                    <Text style={{ fontSize: 16, fontWeight: 600, color: '#CACACA' }}>Overview </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setOverClick(false)}>

                                    <Text style={{ fontSize: 16, fontWeight: 600, marginHorizontal: 70, color: '#1562FB' }}>Reviews </Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View>

                                    <View style={styles.RateSet}>
                                        <Text style={{ fontSize: 17, textAlign: 'center', color: '#878787' }}>Overall Rating</Text>
                                        <Text style={{ fontSize: 31, textAlign: 'center', fontWeight: 600 }}>3.9 </Text>

                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                                            <Image source={star} style={{ width: 16, height: 16 }} />
                                            <View style={{ width: 3 }} />

                                            <Image source={star} style={{ width: 16, height: 16 }} />
                                            <View style={{ width: 3 }} />

                                            <Image source={star} style={{ width: 16, height: 16 }} />
                                            <View style={{ width: 3 }} />

                                            <Image source={star} style={{ width: 16, height: 16 }} />
                                            <View style={{ width: 3 }} />

                                            <Image source={Gstar} style={{ width: 16, height: 16 }} />

                                        </View>
                                    </View>

                                    <View style={styles.gridView}>
                                        <View style={styles.leftView}><Text style={styles.tView}>Excellent</Text></View>
                                        <View style={styles.rightView}><View style={styles.insightView} /></View>

                                    </View>

                                    <View style={styles.gridView}>
                                        <View style={styles.leftView}><Text style={styles.tView}>Good</Text></View>
                                        <View style={styles.rightView} ><View style={styles.insightView1} /></View>

                                    </View>

                                    <View style={styles.gridView}>
                                        <View style={styles.leftView}><Text style={styles.tView}>Average</Text></View>
                                        <View style={styles.rightView}><View style={styles.insightView2} /></View>

                                    </View>

                                    <View style={styles.gridView}>
                                        <View style={styles.leftView}><Text style={styles.tView}>Poor</Text></View>
                                        <View style={styles.rightView}><View style={styles.insightView3} /></View>

                                    </View>

                                    {
                                        Des.map(review => (
                                            <View style={styles.review1}>
                                                <View style={styles.firstStyle}>
                                                    <View style={styles.infoStle}><Image  source={{uri:review.img}} style={styles.imgStyle} /></View>
                                                    <View style={styles.infoStle}>
                                                        <View style={styles.dataStyle}>
                                                            <Text style={styles.tt1}>{review.name}</Text>
                                                                
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Image source={star} style={{ width: 14, height: 14 }} />
                                                                <View style={{ width: 3 }} />

                                                                <Image source={star} style={{ width: 14, height: 14 }} />
                                                                <View style={{ width: 3 }} />

                                                                <Image source={star} style={{ width: 14, height: 14 }} />
                                                                <View style={{ width: 3 }} />

                                                                <Image source={Gstar} style={{ width: 14, height: 14 }} />
                                                                <View style={{ width: 3 }} />

                                                                <Image source={Gstar} style={{ width: 14, height: 14 }} />
                                                            </View>
    

                                                        </View>
                                                    </View>

                                                    <View style={styles.infoStle}><Text style={styles.tt2}>{review.days}</Text></View>
                                                </View>
                                                <View style={styles.secondStyle}>
                                                    <Text style={styles.paraStyle}>{review.para}</Text>
                                                </View>

                                            </View>
                                        ))
                                        }



                                    <View>

                                    </View>



                                </View>
                                <View style={{marginVertical:30}}>
                                
                                </View>
                            </ScrollView>

                        </View>



                        )
                        }





                    </View>

                </View>
                {
                    overClick ? (
                        <View style={{ position: 'absolute', bottom: 20, left: 10, right: 10, height: 100, backgroundColor: '#005EFB', borderRadius: 40 }}>

                            <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', alignItems: 'center' }}>

                                <View style={{ flexDirection: 'column' }}>
                                    <Text  style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>  Total Price</Text>
                                    <Text style={{ fontSize: 27, fontWeight: 600, color: '#fff' }}>  $ 1999</Text>
                                </View>
                                <TouchableOpacity >
                                    <View style={{ width: 140, height: 60, borderRadius: 30, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20, fontWeight: 700 }} > Book Now</Text></View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ) : (
                        <View></View>
                    )

                }

            </View>
        )

    }
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <DesView tt='fav' />
        </View>

    )


}



export default DescriptionPage

const styles = StyleSheet.create({
    ldnStyle: {
        width: '100%',
        height: 280,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        backgroundColor: '#000',



    },

    ldnImgStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        boxShadow: 'rgba(100, 100, 111, 0.5) 0px 7px 29px 0px',


    },
    NextStyle: {
        width: 23,
        height: 23,
        
        resizeMode: "contain",
    },
    favStyle: {
        width: 40,
        height: 40,
        marginTop: -23,
        marginRight: 26


    },

    ldnViewStyle: {

        margin: 20,
        marginTop: -5

    },

    ldnTxtStyle: {
        fontSize: 28,
        fontWeight: 800
    },
    gridView: {
        flexDirection: 'row',
        alignContent: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    leftView: {
        width: 70,


    },
    rightView: {
        width: 250,
        height: 15,
        backgroundColor: '#C7C7C7',
        borderRadius: 20,
    },
    tView: {
        color: '#858585',
        fontWeight: 500


    },
    insightView: {
        width: 100,
        height: 15,
        backgroundColor: '#248F6D',
        borderRadius: 20,

    },
    insightView1: {
        width: 200,
        height: 15,
        backgroundColor: '#248F6D',
        borderRadius: 20,

    },
    insightView2: {
        width: 50,
        height: 15,
        backgroundColor: '#248F6D',
        borderRadius: 20,

    },
    insightView3: {
        width: 100,
        height: 15,
        backgroundColor: '#248F6D',
        borderRadius: 20,

    },
    RateSet: {
        paddingBottom: 20
    },

    review1: {
        width: '100%',
        height: 160,
        backgroundColor: '#F9F9F9',
        marginVertical: 15,
        justifyContent: 'space-between',
        borderRadius: 15,
    },

    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 15,

    },
    infoStle: {
        width: 100,
    },

    tt1: {
        fontSize: 15,
        marginBottom: 10
    },
    tt2: {
        color: '#ADADAD',
        alignItems: 'flex-end'

    },
    dataStyle: {
        flexDirection: 'column',
        marginHorizontal: -70
    },
    secondStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10

    },
    firstStyle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 5

    },
    paraStyle:{
        marginLeft:8,
        
    }


})