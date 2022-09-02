import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SendMessage = ({ id }) => {
    // // input için tuttuğunuz state
    // const [message, setMessage] = useState("");
    // // context erişimi (degişken isimleri farklı olabilir)
    // const { users, setUsers } = useContext(UserContext)

    // // send message fonksiyonunun yapacağıni işlem, kurduğunuz yapıya göre değişebilir.
    // const sendMessage = () => {
    //     const newUsers = users.map(user => {
    //         // {id: 1, username: "atakan", messages: []}
    //         if (user.id === params.user.id) {
    //             const newMessages = user.messages.push({ text: "Merhaba", date: new Date.now() })
    //             return {
    //                 ...user,
    //                 messages: newMessages
    //             }
    //         } else {
    //             return user
    //         }
    //     })
    //     setUsers(newUsers)
    // }

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
                <TextInput placeholder='write a message' style={styles.messagebox} />
                <IconSimpleLineIcons style={{ marginTop: 15, marginRight: 20 }} size={25} name="microphone" />
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
