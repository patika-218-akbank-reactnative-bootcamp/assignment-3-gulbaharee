import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ThemeContext } from '../contexts/theme';

const Theme = () => {

    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.page, { backgroundColor: theme.backgroundColor }]}>
            <View style={[styles.container,
            { backgroundColor: theme.backgroundColor }]}>
                <Pressable onPress={toggleTheme}>
                    <Text style={[styles.button,{color:theme.color}]}>Light / Dark</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default Theme;


const styles = StyleSheet.create(
    {
        page:{
            height:1000,
        },
        container: {
            margin: 30,
            height: 70,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            borderWidth:1,
            bor:"gray",
            borderRadius:10,
        },
        button: {
            height: 40,
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 20,
            fontSize: 20,
        },
        border: {
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
        },
    }
)