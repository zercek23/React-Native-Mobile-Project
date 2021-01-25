import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function Notify() {
    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        registerForPushNotificationsAsync().then(token => {
            setToken(token);
        });
        enableNotification();
    }, []);

    return (

        <View>
        </View>


    );
}

function enableNotification() {
    Notifications.cancelAllScheduledNotificationsAsync();
    scheduleNotification("Uygulamamızdaki yeni ürünlere göz atmayı unutmayın!", 4, 31);
}

function scheduleNotification(title, hour, minute) {
    Notifications.scheduleNotificationAsync({
        content: {
            title,
        },
        trigger: {
            hour,
            minute,
            repeats: true,
        }
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [250, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#f9f7f3',
        padding: 8,
    },
    title: {
        color: '#38618c',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40
    },
    icon: {
        width: 80,
        height: 80,
    }
});
