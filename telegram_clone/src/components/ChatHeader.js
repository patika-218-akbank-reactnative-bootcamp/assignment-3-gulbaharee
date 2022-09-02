import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = ({ name }) => {
    const { goBack } = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <IconIonicons name="chevron-back-sharp" style={{ marginTop: 60, marginLeft: 10 }} size={25} onPress={() => goBack('Home')} />
                <Text style={styles.contact}>{name}</Text>
                <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.userImage} />
            </View>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.4,
                }}
            />
        </View>

    )
}
export default ChatHeader;

const styles = StyleSheet.create(
    {
        container: {
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        contact: {
            fontSize: 25,
            marginTop: 60,

        },
        userImage: {
            width: 35,
            height: 35,
            borderRadius: 50,
            marginTop: 60,
            marginRight: 20,
        }
    }
)