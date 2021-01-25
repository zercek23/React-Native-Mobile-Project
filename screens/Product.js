import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

const Data = []

export default function Product({ navigation, route }) {
    const { itemID, name, price, age } = route.params;
    const [adet, setAdet] = useState(0)

    const sepeteEkle = () => {
        
        navigation.navigate('Sepetim', { itemID: itemID, name: name, price: price, age: age, adet: adet })
        navigation.dispatch(StackActions.popToTop());
    }
    const adetEkle = (miktar) => {
        setAdet(miktar)
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: "center", width: '100%' }}>
            <View style={{ flex: 2, width: '100%' }}>
                <View style={{ flex: 10 }}>
                    <Image
                        source={require('../images/urun1.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", width: '100%' }}>
                    <View style={{ flex: 1, marginLeft: 20 }}><Text>{itemID}</Text></View>

                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}><Text>{price} ₺</Text></View>
                </View>
            </View>

            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => adetEkle(4)}
                            style={styles.count}
                        >
                            <Text style={styles.buttonTitle}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => adetEkle(8)}
                            style={styles.count}
                        >
                            <Text style={styles.buttonTitle}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => adetEkle(12)}
                            style={styles.count}
                        >
                            <Text style={styles.buttonTitle}>12</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => adetEkle(16)}
                            style={styles.count}
                        >
                            <Text style={styles.buttonTitle}>16</Text>
                        </TouchableOpacity>


                    </View>

                    <TouchableOpacity onPress={() => sepeteEkle()}
                        style={styles.button}
                    >
                        <Text style={styles.buttonTitle}>Sepete Ekle</Text>
                    </TouchableOpacity>
                    <Text>Seçilen Adet : {adet}</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a4e494',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        height: 48,
        width: '90%',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    count: {
        backgroundColor: '#bab5b3',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        height: 50,
        width: 75,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    }
})

