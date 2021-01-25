import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { firebase } from '../firebase.js'

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


export default function CustomDrawerContent(props) {
    let user;
    const [fullName, setFullName] = useState('')

    if (firebase.auth().currentUser) {
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(firebase.auth().currentUser.uid)
            .get()

            .then(firestoreDocument => {
                if (!firestoreDocument.exists) {
                    alert("User does not exist anymore.")
                    return;
                }
                user = firestoreDocument.data()
                setFullName(user.fullName)
            })
            .catch(error => {
                alert(error)
            });
    }


    return (

        <DrawerContentScrollView {...props}>
            <View style={{ paddingLeft: 20, paddingTop: 30, height: 180, backgroundColor: '#fff' }}>
                <Image source={require('../images/logo.png')} style={{ height: 76, width: 200 }} />

                {firebase.auth().currentUser ? (
                    <Text style={styles.isim}>{fullName}</Text>
                ) : (
                        <Text></Text>
                    )}

                {firebase.auth().currentUser ? (
                    <Text>{firebase.auth().currentUser.email}</Text>
                ) : (
                        <Text></Text>
                    )}

            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: 'black', opacity: .2 }} />

            <DrawerItemList {...props} />
            <View style={{ height: 1, width: '100%', backgroundColor: 'black', opacity: .2 }} />

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    isim: {
        fontWeight: 'bold',
        marginTop: 20,
    },
});