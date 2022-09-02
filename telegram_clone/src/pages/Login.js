import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import CountryCodes from '../assets/countryCodes.json';
import { UserContext } from '../contexts/user';

const Login = () => {
    const { navigate } = useNavigation();

    const [selectedCode, setSelectedCode] = useState();
    const {user,setUser}=useContext(UserContext);
    const [userRegister,setUserRegister] = useState({id:null,firstName:"",lastName:"",userName:"",phoneNumber:""});
    

    const handleSubmit = (e)=>{
        setUser({
            id:1,
            firstName:userRegister.firstName,
            lastName:userRegister.lastName,
            userName:userRegister.userName,
            phoneNumber: userRegister.phoneNumber,
        },[]);

        navigate('Home');
    }
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Phone Number</Text>
            <View style={styles.phoneNumber} >
                <Picker style={styles.picker} selectedValue={selectedCode} onValueChange={(itemValue, itemIndex) => setSelectedCode(itemValue)}>
                    {CountryCodes.map((country) => (
                        <Picker.Item label={country.dial_code} value={country.dial_code} />
                    ))}
                </Picker>
                <TextInput placeholder="5xx xxx xx xx" style={styles.phoneInput} keyboardType="phone-pad" onChange={(item)=>setUserRegister(phoneNumber=item)} />
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.text}>First Name</Text>
                <TextInput style={styles.RegisterInfo} autoCapitalize="words" onChange={(item)=>setUserRegister(firstName=item)}/>
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.text}>Last Name</Text>
                <TextInput style={styles.RegisterInfo} onChange={(item)=>setUserRegister(lastName=item)} />
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.RegisterInfo} onChange={(item)=>setUserRegister(userName=item)} />
            </View>
            <Button style={styles.button} title="Register" onPress={()=>{handleSubmit()}}  />
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
        button:{
            backgroundColor:"blue",
            marginTop:40,
        }
    }
)