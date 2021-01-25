import * as React from 'react';
import { useState, useEffect } from 'react';
import { firebase } from '../firebase.js';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { firestore } from 'firebase';


export default function Card(props) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([])
  useEffect(() => {
    const usersRef = firebase.firestore().collection('products')
    usersRef
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          products.push(documentSnapshot.data())
        });
        setLoading(false);

      });
    return () => {
      firestore()
    }
  }, [])


  console.log(products)
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", height: '100%', margin: 7, width: '100%' }}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => { item.id }}
        style={{ width: '100%' }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={{
            flex: 1,
            height: 300, backgroundColor: "rgba(236,236,236,0.1)", marginHorizontal: 15, marginVertical: 20, padding: 2, flex: 1, alignItems: 'center', justifyContent: 'center',
            width: '100%',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 2.30,
            shadowRadius: 4.3,
            elevation: 3,
          }}>
            <View style={{ flex: 1, width: '100%', height: 180 }}>
              <TouchableOpacity onPress={() => props.param.navigate('Product', { itemID: item.id, name: item.productName, price: item.productPrice, age: item.productAge })} style={{ width: '100%', height: 80, flex: 1 }}>
                <Image
                  source={require('../images/urun1.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.productPrice} ₺</Text>
            </View>
            <View style={{ justifyContent: 'center', marginTop: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.productName}</Text>
            </View>
            <View style={{ height: 1, marginBottom: 5, width: '100%', backgroundColor: 'black', opacity: .2 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: '100%' }}>
              <View style={{ marginLeft: 8 }}>

                <Text style={{ fontSize: 15 }}>{item.productAge} YAŞ</Text>
              </View>
              <View style={{ alignItems: "center", width: '100%',marginLeft:'60%',marginTop:-5 }}>
                <TouchableOpacity onPress={() => props.param.navigate('Product', { itemID: item.id, name: item.productName, price: item.productPrice, age: item.productAge })} style={{ width: '100%', height: 80, flex: 1 }}>
                  <Image
                    source={require('../images/sepetAdd.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}