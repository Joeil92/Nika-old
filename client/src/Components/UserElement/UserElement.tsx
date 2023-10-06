import { View, Text, Button } from "react-native"
import { useContext } from 'react';
import { socketContext } from "../../Services/Context/Socket/Socket";

interface props {
    id: string
}

function UserElement({id}: props) {

    const socket = useContext(socketContext);

    return(
        <View>
            <Text>{id}</Text>
            {
                socket.id === id &&
                <Button 
                    title="Envoyer un message"
                />
            }
        </View>
    )
}

export default UserElement;