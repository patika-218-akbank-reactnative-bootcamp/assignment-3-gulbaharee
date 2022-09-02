import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import CountryCodes from '../assets/countryCodes.json';

const Login = () => {
    const { navigate } = useNavigation();

    const [selectedCode, setSelectedCode] = useState();
    return (
        // <View style={{margin:60}}>
        //     <Text onPress={()=>navigate('Home')}>login</Text>
        // </View>
        <View style={styles.container}>
            <Text style={styles.text}>Phone Number</Text>
            <View style={styles.phoneNumber} >
                <Picker style={styles.picker} selectedValue={selectedCode} onValueChange={(itemValue, itemIndex) => setSelectedCode(itemValue)}>
                    {CountryCodes.map((country) => (
                        <Picker.Item label={country.dial_code} value={country.dial_code} />
                    ))}
                </Picker>
                <TextInput placeholder="5xx xxx xx xx" style={styles.phoneInput}/>
            </View>
            
        </View>
    )
}

export default Login;

const styles = StyleSheet.create(
    {
        container: {
            margin: 50,
            marginTop: 200,
        },
        picker: {
            marginLeft: -20,
            width: 120,
            height: 20,
            
        },
        text: {
            justifyContent: "center",
            fontSize: 30,
        },
        phoneNumber: {
            display: "flex",
            flexDirection: "row",
        },
        phoneInput:{
            fontSize:20,
            marginTop:20,
        }
    }
)