import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import CountryCodes from '../assets/countryCodes.json';
import { UserContext } from '../contexts/user';
import { ThemeContext } from '../contexts/theme';

const Login = () => {
    const { navigate } = useNavigation();

    const [selectedCode, setSelectedCode] = useState();
    const { user, setUser } = useContext(UserContext);
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

    let phone;
    let name;
    let surname;
    let username;

    const handleSubmit = (e) => {
        setUser({
            login: true,
            id: 1,
            firstName: name,
            lastName: surname,
            phoneNumber: phone,
            userName:username,
            messages:[],
        }, []);

        navigate('Home');
    }
    return (
        <View style={ [styles.page,{backgroundColor: theme.backgroundColor }]}>
            <View style={styles.container}>
                <Text style={[styles.text,{color:theme.color}]}>Phone Number</Text>
                <View style={styles.phoneNumber} >
                    <Picker style={styles.picker} selectedValue={selectedCode} onValueChange={(itemValue, itemIndex) => setSelectedCode(itemValue)}>
                        {CountryCodes.map((country) => (
                            <Picker.Item label={country.dial_code} value={country.dial_code} />
                        ))}
                    </Picker>
                    <TextInput placeholder="5xx xxx xx xx" style={[styles.phoneInput,{color:theme.color}]} keyboardType="phone-pad" onChangeText={text =>phone=selectedCode + text } />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={[styles.text,{color:theme.color}]}>First Name</Text>
                    <TextInput style={[styles.RegisterInfo,{color:theme.color}]} autoCapitalize="words"  onChangeText={text =>name=text } />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={[styles.text,{color:theme.color}]}>Last Name</Text>
                    <TextInput style={[styles.RegisterInfo,{color:theme.color}]} onChangeText={text =>surname=text }/>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={[styles.text,{color:theme.color}]}>Username</Text>
                    <TextInput style={[styles.RegisterInfo,{color:theme.color}]} onChangeText={text =>username=text } />
                </View>
                <Button style={styles.button} title="Register" onPress={handleSubmit} />
            </View>
        </View>

    )
}

export default Login;

const styles = StyleSheet.create(
    {
        page:{
            height:1000,
        },
        container: {
            margin: 50,
            marginTop: 200,
        },
        picker: {
            marginLeft: -20,
            width: 120,
            height: 20,
            marginTop: -75,

        },
        text: {
            justifyContent: "center",
            fontSize: 30,

        },
        phoneNumber: {
            display: "flex",
            flexDirection: "row",
        },
        phoneInput: {
            fontSize: 20,
            marginTop: 20,
        },
        RegisterInfo: {
            borderWidth: 1,
            borderRadius: 5,
            height: 40,
        },
        button: {
            backgroundColor: "blue",
            marginTop: 40,
        }
    }
)