import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Next1 from '../assets/Next1.png'
import { useNavigation } from '@react-navigation/native'

const Payment = () => {
    const navigation =useNavigation();
    return (
        <View style={styles.MainPay}>
            <TouchableOpacity style={styles.flex} onPress={()=>navigation.navigate('wallet')}>
                <Image source={Next1} style={styles.nextStyle} />
                <Text style={styles.pay}>   Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    MainPay: {
        margin: 20
    },
    pay: {
        color: '#BFBFBF',
        fontSize: 16
    },
    flex: {
        flexDirection: 'row',
        alignContent: 'center',
        marginVertical: 10,
        textAligns: 'center'
    },
    nextStyle: {
        width: 15,
        height: 15,
        marginVertical:2
    }
})