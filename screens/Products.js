import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Card from '../components/Card';
import Layout from '../components/Layout';

export default function Products({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Layout param={navigation} />
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Card param={navigation} />
                </View>
            </ScrollView>
        </View>
    )
}