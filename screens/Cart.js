import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Layout from '../components/Layout.js';

export default function Cart({ navigation, route }) {
    const [data, setData] = useState([])
    let toplamTemp = 0;
    if (route.params) {
        console.log(route.params)
        const { itemID, name, price, age, adet } = route.params;
        data.push(route.params)
        alert(name + ' sepetinize eklendi.')

        const toplamArray = data.map((item) => item.price * item.adet);
        
        for (let i = 0; i < toplamArray.length; i++) {
            toplamTemp = toplamTemp + toplamArray[i];
        }
    }
    const toplam = toplamTemp;

   

    return (
        <View style={{ flex: 1 }}>
            <Layout param={navigation} />
            <View style={styles.price}>
                <Text style={{ fontSize: 19 }}>Tutar</Text>
                <Text style={{ fontSize: 35 }}>{toplam} ₺</Text>
            </View>
            <View style={{ flex: 6 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => { item.id }}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={{ flex: 3 }}>
                                <Image
                                    source={require('../images/urun1.jpg')}
                                    style={{
                                        width: '100%',
                                        height: '100%'

                                    }}
                                />
                            </View>
                            <View style={{ flex: 6, padding: 10 }}>
                                <Text style={{ fontSize: 19 }}>{item.name}</Text>
                                <Text style={{ fontSize: 35 }}>{item.price} ₺</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                borderWidth: 3,
                                width: 50,
                                height: '80%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: '#f3c75d'
                            }}>
                                <Text style={{ fontSize: 19 }}>Adet</Text>
                                <Text style={{ fontSize: 25 }}>{item.adet}</Text>
                            </View>
                        </View>
                    )}
                />


            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        flexDirection: 'row',
        height: 180,
        backgroundColor: '#fff',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.30,
        shadowRadius: 1.3,
        elevation: 1,
    },
    price: {
        flex: 1,
        width: '100%',
        borderRightWidth: 1,
        borderColor: 'grey',
        justifyContent: 'flex-end',
        padding: 20,
        alignItems: 'flex-end',
        backgroundColor: '#f3c75d',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2.30,
        shadowRadius: 4.3,
        elevation: 3,
    }
})