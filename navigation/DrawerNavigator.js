import * as React from 'react';
import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddProduct from '../screens/AddProduct.js';
import LogOut from '../screens/LogOut.js'
import { MyStack, HomeStack } from './StackNavigator.js';
import CustomDrawerContent from '../components/CustomDrawerContent.js';
import { firebase } from '../firebase.js'
import Products from '../screens/Products.js';
import CartTabNavigator from './TabNavigator.js';
import Cart from '../screens/Cart.js';


const Drawer = createDrawerNavigator();


export default function MyDrawer() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const [userID, setUserID] = useState();
    let user1;
    if (firebase.auth().currentUser) {
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(firestoreDocument => {
                if (!firestoreDocument.exists) {
                    alert("User does not exist anymore.")
                    return;
                }
                const user1 = firestoreDocument.data()
                setUserID(user1.id)
            })
            .catch(error => {
                alert(error)
            });

    }

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: '#4bae32',
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Ana Sayfa" component={HomeStack} />
            <Drawer.Screen name="Sepetim" component={Cart} />
            <Drawer.Screen name="İletişim" component={CartTabNavigator} />
            {userID == "admin" && firebase.auth().currentUser
                ? (<Drawer.Screen name="Ürün Ekle" component={AddProduct} />)
                : (<Drawer.Screen name="Ürünler" component={Products} />)
            }


            {!user ? (
                <Drawer.Screen name="Giriş Yap" component={MyStack} />
            ) : (
                    <Drawer.Screen name="Çıkış Yap" component={LogOut} />
                )}
        </Drawer.Navigator>
    );
}