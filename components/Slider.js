import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Swiper from "react-native-web-swiper";

export default class Slider extends React.Component {
    render() {
        return (
            <Swiper
                from={0}
                minDistanceForAction={0.1}
                loop
                timeout={2.5}
                controlsProps={{
                    dotsTouchable: true,
                    prevPos: 'left',
                    nextPos: 'right',
                    nextTitle: '>',
                    nextTitleStyle: { color: 'white', fontSize: 24, fontWeight: '500' },
                    PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                            <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                                {'<'}
                            </Text>
                        </TouchableOpacity>
                    ),
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
                    <Image
                        source={require('../images/resim-1.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,200,20,0.3)" }}>
                    <Image
                        source={require('../images/resim-2.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                    <Image
                        source={require('../images/resim-3.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
            </Swiper>
        )
    }
}