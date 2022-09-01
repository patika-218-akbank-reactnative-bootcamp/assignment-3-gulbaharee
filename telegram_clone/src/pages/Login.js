import React from 'react';
import { View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
const {navigate} =useNavigation();

    return (
        <View style={{margin:60}}>
            <Text onPress={()=>navigate('Home')}>login</Text>
        </View>
    )
}

export default Login;