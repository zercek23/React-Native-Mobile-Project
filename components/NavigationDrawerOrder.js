import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


export default function NavigationDrawerOrder(props) {

    return (
        <View style={{ flexDirection: 'row',}}>
            <TouchableOpacity onPress={() => props.navigationProps.navigate('Sepetim')}>
                {/*Donute Button Image */}
                <Image 
                    source={require('../images/sepet.png')}
                    style={{
                        width: 45,
                        height: 45,
                        marginRight: 8
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}