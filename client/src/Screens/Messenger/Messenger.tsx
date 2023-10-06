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
            <TextInput 
                value={input}
                placeholder="Envoyer un message !"
                onChangeText={onChangeInput}
            />
            <Button 
                title="Envoyer"
                onPress={sendMessage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})

export default Messenger;