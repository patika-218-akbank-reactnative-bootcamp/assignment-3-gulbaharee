import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/user';
import { ThemeContext } from '../contexts/theme';


const Setting = () => {
    const { navigate } = useNavigation();
    const { user, setUser } = useContext(UserContext);
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);


    const logout = () => {
        setUser({ login: false });
        navigate('Login');
    }
    return (
        <View style={ [styles.page,{backgroundColor: theme.backgroundColor }]}>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
                    <Text style={[styles.userName,{color:theme.color}]}>{user.firstName} {user.lastName}</Text>
                    <Text style={styles.userInfo}>{user.phoneNumber} @{user.userName}</Text>
                </View>
                <View style={styles.settings}>
                    <Pressable style={styles.button} title='Theme' onPress={() => navigate('Theme')}>
                        <IconFoundation style={{ marginTop: 15, marginRight: 20, color: "green" }} size={25} name="contrast" />
                        <Text style={styles.buttonText}>Theme</Text>
                        <IconIonicons name="chevron-forward" style={{ marginTop: 15, marginLeft: 10 }} size={25} />
                    </Pressable>
                    <Pressable style={styles.button} title='Settings' onPress={() => navigate('UpdateSetting')}>
                        <IconIonicons style={{ marginTop: 15, marginRight: 20, color: "purple" }} size={25} name="settings" />
                        <Text style={styles.buttonText}>Settings</Text>
                        <IconIonicons name="chevron-forward" style={{ marginTop: 15, marginLeft: 10 }} size={25} />
                    </Pressable>
                </View>
                <Pressable style={styles.logout} onPress={logout}>
                    <Text style={styles.logoutText}> LOG OUT </Text>
                </Pressable>
            </View>
        </View>

    )
}

export default Setting;

const styles = StyleSheet.create(
    {
        page:{
            height:1000,
        },
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        logout: {
            margin: 30,
            height: 60,
            backgroundColor: "rgb(42, 171, 238)",
            borderRadius: 20,

        },
        logoutText: {
            textAlign: "center",
            fontSize: 20,
            fontWeight: 2,
            marginTop: 14,
        },
        info: {
            height: 300,
            justifyContent: "center",
        },
        settings: {
            margin: 30,
            height: 120,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
        },
        userImage: {
            alignSelf: "center",
            width: 120,
            height: 120,
            borderRadius: 60,
        },
        userName: {
            textAlign: "center",
            marginTop: 15,
            fontSize: 30,
        },
        userInfo: {
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
            color: "rgb(200,200,200)",
        },
        button: {
            height: 60,
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10,
            justifyContent: "space-between",

        },
        buttonText: {
            marginTop: 20,
            width: 200,
        }
    }
)