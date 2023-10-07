import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { socketContext } from "../../Services/Context/Socket/Socket";
import { Message as MessageType } from "../../types/Message";
import Message from "../Message/Message";


function Messages() {
    const socket = useContext(socketContext);
    const [messages, setMessages] = useState<Array<MessageType> | null>(null);

    useEffect(() => {
        const getMessages = (messages: Array<MessageType>) => {
            console.log(messages);
            setMessages(messages);
        }

        if (!messages) {
            socket.emit('get-messages');
        }

        socket.on('get-messages', getMessages);

        return () => {
            socket.off('get-messages', getMessages);
        }

    }, [socket]);

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    messages && messages.length > 0
                        ? messages.map((msg, index) => (
                            <Message key={index} user={msg.user} content={msg.content} createdAt={msg.createdAt} />
                        ))
                        : <Text style={styles.text}>Aucun message</Text>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10
    }
})

export default Messages;