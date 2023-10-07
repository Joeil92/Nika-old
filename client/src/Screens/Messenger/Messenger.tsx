import { useContext, useState } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";
import { socketContext } from "../../Services/Context/Socket/Socket";
import Messages from "../../Components/Messages/Messages";

function Messenger() {
    const socket = useContext(socketContext);
    const [input, onChangeInput] = useState('');

    function sendMessage() {
        if(input !== '') {
            socket.emit('send-message', input);
        }

        onChangeInput('');
    };
    
    return(
        <View style={styles.container}>
            <Messages />
            <View style={styles.form}>
                <TextInput 
                style={styles.textInput}
                    value={input}
                    placeholder="Message.."
                    onChangeText={onChangeInput}
                />
                <Button 
                    title="Envoyer"
                    onPress={sendMessage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    form: {
        backgroundColor: 'rgb(220,252,231)',
        margin: 10,
        padding: 15,
        borderRadius: 24,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        fontSize: 24,
    }
})

export default Messenger;