import * as React from 'react';
import { View, Text } from 'react-native';
import NavigationDrawerOrder from './NavigationDrawerOrder.js';
import NavigationDrawerStructure from './NavigationDrawerStructure.js';

export default function Layout(props) {
    return (
        <View style={{ backgroundColor: '#4bae32', width: '100%', height: 80, paddingTop: 30, flexDirection: 'row', justifyContent:'space-between' }}>
            <View style={{ justifyContent: 'center'}}>
                <NavigationDrawerStructure
                    navigationProps={props.param}
                />                
            </View>
            <View>
            <Text style={{ fontWeight: 'bold', color: '#fff', marginVertical: 15 }}>Triliya</Text>
            </View>


            <View style={{ justifyContent: 'center'}} >
                <NavigationDrawerOrder
                    navigationProps={props.param}
                />
            </View>

        </View>

    )
}
