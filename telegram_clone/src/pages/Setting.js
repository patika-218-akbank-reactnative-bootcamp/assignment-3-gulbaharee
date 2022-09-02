import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
                <Text style={styles.userName}>Gulbahar Erol</Text>
                <Text style={styles.userInfo}>xxx-xxx-xx-xx @username</Text>
            </View>
            <View style={styles.settings}>
                <Pressable style={styles.button} title='Theme' onPress={()=>navigate('Theme')}>
                    <IconFoundation style={{ marginTop: 15, marginRight: 20, color:"green" }} size={25} name="contrast" />
                    <Text style={styles.buttonText}>Theme</Text>
                    <IconIonicons name="chevron-forward" style={{ marginTop: 15, marginLeft: 10 }} size={25} />
                </Pressable>
                <Pressable style={styles.button} title='Settings' onPress={()=>navigate('UpdateSetting')}>
                    <IconIonicons style={{ marginTop: 15, marginRight: 20 , color:"purple"}} size={25} name="settings" />
                    <Text style={styles.buttonText}>Settings</Text>
                    <IconIonicons name="chevron-forward" style={{ marginTop: 15, marginLeft: 10 }} size={25} />
                </Pressable>
            </View>
        </View>
    )
}

export default Setting;

const styles = StyleSheet.create(
    {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
            display:"flex",
            flexDirection:"row",
            marginLeft:10,
            marginRight:10,
            justifyContent:"space-between",

        },
        buttonText: {
            marginTop: 20,
            width:200,
        }
    }
)