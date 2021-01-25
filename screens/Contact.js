import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import Layout from '../components/Layout.js';
import Notify from '../components/Notify.js'

export default class Contact extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <Layout param={navigation} />
                    <View style={styles.row}>
                        <Image source={require('../images/logo.png')} style={{ height: 76, width: 200, marginTop: 100, marginBottom: 30 }} />
                    </View>
                    <View style={styles.row}>
                        <FontAwesome5 name='map-marker-alt' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            Uğurmumcu Mh. N Cd. No:55/57A Sultangazi/İstanbul
                    </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='phone' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            +90 (536) 852 1453
                    </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='whatsapp' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            +90 (536) 852 1453
                    </Text>

                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='facebook' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            www.facebook.com/triliya
                    </Text>

                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='instagram' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            +90 (536) 852 1453
                    </Text>

                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='envelope' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            +90 (536) 852 1453
                    </Text>

                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='paper-plane' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            +90 (536) 852 1453
                    </Text>

                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <FontAwesome5 name='link' size={35} style={styles.awesome} />
                        <Text style={styles.txt}>
                            +90 (536) 852 1453
                    </Text>

                    </View>
                </View>
                <Notify/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 15 },
    awesome: { width: 50, marginHorizontal: 10, opacity: .50 },
    txt: { marginHorizontal: 20, width: 200 },
    line: { height: 1, width: '80%', backgroundColor: 'black', opacity: .2 },
});