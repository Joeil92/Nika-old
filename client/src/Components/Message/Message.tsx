import {  StyleSheet, View, Text } from "react-native";
import { Message as MessageType } from "../../types/Message";
import { useContext } from "react";
import { socketContext } from "../../Services/Context/Socket/Socket";


function Message({user, content, createdAt}: MessageType) {

    const socket = useContext(socketContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>{socket.id}</Text>
                <Text>{new Date(createdAt).toLocaleDateString('fr')}</Text>
            </View>
            <Text>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        padding: 10,
        margin: 10,
        width: 200,
        color: 'rgb(153,199,254)',
        backgroundColor: "rgb(8,124,253)"
    },
    header: {
        display: 'flex'
    }
})

export default Message;