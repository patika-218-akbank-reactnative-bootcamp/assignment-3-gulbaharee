import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SendMessage = ({ id }) => {

    return (
        <View>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.4,
                }}
            />
            <View style={styles.container}>
                <IconEntypo name="attachment" style={{ marginTop: 20, marginLeft: 20 }} size={25} />
                <TextInput placeholder='write a message' style={styles.messagebox}/>
                <IconSimpleLineIcons style={{ marginTop: 15,marginRight:20}} size={25} name="microphone"/>
            </View>
        </View>

    )
}
export default SendMessage;

const styles = StyleSheet.create(
    {
        container: {
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between"
        },
        messagebox:{
            marginTop:15,
            borderRadius:20,
            borderWidth:1,
            borderColor:'gray',
            width:250,
            height:30,
        }
    }
)
