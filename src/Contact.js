import { StyleSheet, ImageBackground, Text, TouchableOpacity, View, FlatList, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Card, Button, Title, Paragraph, TextInput } from 'react-native-paper';
import { useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

const Contact = ({ route, navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        // axios.get("http://173.0.0.247:8113")
        // .then(Response=>{setData(Response)})
        // .then(error=>{console.log(error)})
        fetch("http://173.0.0.247:8113",{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
             }
          })
                .then(Response=>Response.json())
                .then(Response=>setData(Response))
                .catch(error=>alert(error))
    })

    const handleDelete = (data) => {

        fetch("http://173.0.0.247:8113",{
            method:'DELETE',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
          },
          body:JSON.stringify({
            id:data.item.id
          })
          }).then(Response=>alert(data.item.Name+ ' is Deleted'))
     

    }

    const handleEdit = (data) => {
        navigation.navigate('edit', {Data:data.item} )
    }




    const handleAddContact = () => {
            navigation.navigate("add")
    }


    return (
        <View style={styles.container}>
        
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(data) => <View style={{ padding: 15 }}>
                    <Card style={{ borderWidth: 1, borderColor: '#967bb6', borderRadius: 20 }}>
                        <Card.Content style={{ flexDirection: 'row' }}>
                            <Entypo name="user" size={30} color="grey" />
                            <Text style={{ fontSize: 30, color: '#967bb6', marginLeft: 10 }}>{data.item.Name}</Text>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row' }}>

                            <FontAwesome5 name="phone-alt" size={17} color="grey" marginLeft={50} />
                            <Text style={{ fontSize: 20, marginLeft: 20, color: '#967bb6' }}>{data.item.Phone}</Text>

                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row' }}>

                            <SimpleLineIcons name="location-pin" size={17} color="black" marginLeft={50} />
                            <Text style={{ fontSize: 20, marginLeft: 20, color: '#967bb6' }}>{data.item.Location}</Text>

                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                            <FontAwesome5 name="user-edit" onPress={() => { handleEdit(data) }} size={24} color="grey" />
                            <AntDesign name="delete" onPress={() => { handleDelete(data) }} size={24} color="grey" />
                        </Card.Content>
                    </Card>
                </View>} />

            <AntDesign name="pluscircle"
                style={{ color: "#967bb6", fontSize: 50, marginLeft: 320, position: 'absolute', backgroundColor: 'white', borderRadius: 50, marginTop: 660 }}
                onPress={handleAddContact} />

        </View>
    )
}
export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3'
    },


})