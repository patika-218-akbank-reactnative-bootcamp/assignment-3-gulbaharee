import React,{useState,useContext} from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../contexts/user';
import { contactList } from '../assets/contactList';


const SendMessage = ({ id }) => {
    const [message, setMessage] = useState("");
    const { user, setUsers } = useContext(UserContext)

    
    const sendMessage = () => {
        const index = contactList.id.findIndex(id);
        contactList[index].messages.push({text: message, date: new Date.now()});

    }

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
                <TextInput placeholder='write a message' style={styles.messagebox}  onChangeText={text => setMessage(text)}/>
                <IconSimpleLineIcons style={{ marginTop: 15, marginRight: 20 }} size={25} name="microphone" />
                <IconIonicons style={{ marginTop: 15, marginRight: 20 }} size={25} name="send" onPress={()=>sendMessage()}/>
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
            justifyContent: "space-between"
        },
        messagebox: {
            marginTop: 15,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'gray',
            width: 250,
            height: 30,
        }
    }
)
