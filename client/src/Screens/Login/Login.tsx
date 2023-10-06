import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import useFetch from '../../Services/Hooks/useFetch';

function Login({navigation}: any) {
    const [fetchAPI, loading] = useFetch();
    const [email, onChangeEmail] = useState("admin@admin.fr");
    const [password, onChangePassword] = useState("admin");

    const handleSubmit = () => {
        const credentials = {
            email: email,
            password: password
        }

        const response = fetchAPI({
            url: 'https://localhost:8000/auth',
            method: 'POST',
            body: JSON.stringify(credentials)
        });

        console.log(response);
    }

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1, 
            justifyContent: 'center'
        },
        title: {
            fontSize: 32,
            textAlign: 'center'
        },
        emailInput: {
            marginVertical: 5,
            padding: 5,
            borderRadius: 6,
            backgroundColor: 'white'
        },
        passwordInput: {
            marginVertical: 5,
            padding: 5,
            borderRadius: 6,
            backgroundColor: 'white'
        },
        buttonRegister: {
            marginVertical: 25,
            alignItems: 'center'
        }
    })

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Se connecter</Text>
            <TextInput
                style={styles.emailInput}
                placeholder='email'
                value={email}
                onChangeText={onChangeEmail}
            ></TextInput>
            <TextInput
                style={styles.passwordInput}
                secureTextEntry={true}
                placeholder='mot de passe'
                value={password}
                onChangeText={onChangePassword}
            ></TextInput>
            <Button
                title='Se connecter'
                onPress={handleSubmit}
            />
            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                <Text>Aucun compte ? Créez en un !</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;