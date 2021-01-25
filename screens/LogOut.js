import * as React from 'react';
import { View, Text } from 'react-native';
import { firebase } from '../firebase.js'

export default function LogOut({ navigation }) {
    firebase.auth()
        .signOut()
        .then(() => navigation.navigate('Ana Sayfa'))
    return (
        <View>
            <Text>Çıkış Yapıldı.</Text>
        </View>
    )
}

