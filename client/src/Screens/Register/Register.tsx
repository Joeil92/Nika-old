import { View, SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';
import {  useState } from "react";
import useFetch from '../../Services/Hooks/useFetch';

function Register() {
    const [fetchAPI, loading] = useFetch();
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [plainPassword, onChangePlainPassword] = useState("");
    

    const handleSubmit = () => {
        if(email !== '' && password !== '' && plainPassword !== '') {
            if(plainPassword === password) {
                const credentials = {
                    email: email,
                    password: password
                }

                const response = fetchAPI({
                    url: 'https://localhost:8000/api/users', 
                    method: 'POST', 
                    body: JSON.stringify(credentials)
                });

                console.log(response);
            }
        }
    }

    const styles = StyleSheet.create({
        container: {
            padding: 10
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
        }
    })

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>S'enregistrer</Text>
            <TextInput
                style={styles.emailInput}
                placeholder='Email'
                onChangeText={onChangeEmail}
                value={email}
            ></TextInput>
            <TextInput
                style={styles.passwordInput}
                placeholder='Mot de passe'                 
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            ></TextInput>
            <TextInput
                style={styles.passwordInput}
                placeholder='Confirmer mot de passe'
                secureTextEntry={true}
                onChangeText={onChangePlainPassword}
                value={plainPassword}
            ></TextInput>
            <Button
                title='Créer mon compte !' 
                onPress={handleSubmit}
            />
        </SafeAreaView>
    )
}

export default Register;