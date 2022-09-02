import React ,{useContext}from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {ThemeContext} from '../contexts/theme';

const Theme = () => {

    const {theme,setTheme} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Pressable onPress={()=>setTheme('light')}>
                <Text style={styles.button}>Light</Text>
            </Pressable>
            <View style={styles.border} />
            <Pressable onPress={()=>setTheme('dark')}>
                <Text style={styles.button}>Dark</Text>
            </Pressable>

        </View>
    )
}

export default Theme;


const styles = StyleSheet.create(
    {
        container: {
            margin: 30,
            height: 120,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
        },
        button: {
            height: 40,
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            marginTop:20,
        },
        border: {
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
        },
    }
)