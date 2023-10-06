import { Button, Text, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import { socketContext } from "../../Services/Context/Socket/Socket";
import { User } from "../../types/User";
import UserElement from "../../Components/UserElement/UserElement";

function Home({ navigation }: any) {
    const socket = useContext(socketContext);
    const [users, setUsers] = useState<Array<User> | null>(null);

    useEffect(() => {
        const getUsers = (users: Array<User>) => {
            console.log(users);
            setUsers(users);
        }

        if (!users) {
            socket.emit('get-users');
        }

        socket.on('get-users', getUsers);

        return () => {
            socket.off('get-users', getUsers);
        }
    }, [socket]);

    return (
        <View>
            <Text>Utilisateurs en ligne ({users ? users.length : 0})</Text>
            {users && users.map((user, index) => (
                <UserElement id={user.id} key={index} />
            ))}
            {/* <Button
                title="Voir mes amis"
                onPress={() => { navigation.navigate('Messenger') }}
            />
            <Button
                title="Recup socket"
                onPress={() => { socket.emit('get-users') }}
            /> */}
        </View>
    )
}

export default Home;