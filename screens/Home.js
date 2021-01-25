import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import Layout from '../components/Layout.js'
import Slider from '../components/Slider.js'
import Card from '../components/Card.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Kur: null,
        };
    };
    componentDidMount() {
        this.KurCek();
    }
    KurCek = async () => {
        try {
            var self = this;
            const parseString = await require('react-native-xml2js').parseString;
            const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml');
            let responseXml = await response.text();
            await parseString(responseXml, function (err, result) {
                self.setState({ Kur: result });
            });

        } catch (error) {
            console.log('fetch', err)
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Layout param={navigation} />

                <View style={{ flexDirection: 'row', height: 50 }}>
                    <View style={styles.DovizView}>
                        <Text style={styles.DovizBaslik}>USD/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "USD")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                    <View style={styles.DovizView}>
                        <Text style={styles.DovizBaslik}>EURO/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "EUR")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                    <View style={styles.DovizView}>
                        <Text style={styles.DovizBaslik}>STERLİN/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "GBP")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                    <View style={[styles.DovizView, { borderRightWidth: 0 }]}>
                        <Text style={styles.DovizBaslik}>RİYAL/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "SAR")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ height: 250 }}>
                        <Slider />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                        <Card param={navigation} />
                    </View>
                </ScrollView>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    DovizView: {
        flex: 1, borderRightWidth: 1, borderColor: 'grey', justifyContent: 'center'
    },
    DovizBaslik: {
        fontSize: 10, textAlign: 'center'
    },
    Doviz: {
        fontSize: 14, textAlign: 'center', fontWeight: 'bold'
    }
})