import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Layout from '../components/Layout.js';
import { firebase } from '../firebase.js';

export default function AddProduct({ navigation }) {
    const [productName, setProductName] = useState('')
    const [productPrice, setPrice] = useState('')
    const [productAge, setAge] = useState('')
    const [productImageUrl, setImageUrl] = useState('')

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let autoId = ''

    for (let i = 0; i < 20; i++) {
        autoId += CHARS.charAt(
            Math.floor(Math.random() * CHARS.length)
        )
    }

    const urunEkle = () => {
        const data = {
            id: autoId,
            productName: productName,
            productPrice: productPrice,
            productAge: productAge,
            productImageUrl: productImageUrl,
        };
        const usersRef = firebase.firestore().collection('products')
        usersRef
            .doc(autoId)
            .set(data)
            .then(() => {
                navigation.navigate('Ana Sayfa', { user: data })
            })
            .catch((error) => {
                alert(error)
            });
    }

    return (
        <View style={styles.container}>
            <Layout param={navigation} />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Ürün İsmi'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setProductName(text)}
                    value={productName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Ürün Fiyatı'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPrice(text)}
                    value={productPrice}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Ürün Yaşı'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAge(text)}
                    value={productAge}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Resim URL'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setImageUrl(text)}
                    value={productImageUrl}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => urunEkle()}>
                    <Text style={styles.buttonTitle}>Ürün Ekle</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})