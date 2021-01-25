import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


export default function NavigationDrawerStructure(props) {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={require('../images/drawerWhite.png')}
                    style={{
                        width: 35,
                        height: 35,
                        marginLeft: 8
                    }}
                />
            </TouchableOpacity>
        </View>
    );

}