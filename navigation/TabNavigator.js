import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Contact from '../screens/Contact.js';
import Map from '../screens/Map.js';

const Tab = createBottomTabNavigator();

const CartTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Yaz"
            
            tabBarOptions={{
                activeTintColor: '#4bae32',
                labelStyle: {
                    fontSize: 20,
                    paddingBottom:10
                  }
            }}
        >
            <Tab.Screen name="İletişim" component={Contact} />
            <Tab.Screen name="Harita" component={Map} />
        </Tab.Navigator>
    );
};

export default CartTabNavigator;