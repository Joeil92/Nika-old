import { View, SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from "react";
import useFetch from '../../Services/Hooks/useFetch';

function Register() {
    const [fetchAPI, loading] = useFetch();
    const [email, onChangeEmail] = useState("admin@admin.fr");
    const [password, onChangePassword] = useState("admin");
    const [plainPassword, onChangePlainPassword] = useState("admin");


    const handleSubmit = async () => {
        if (email !== '' && password !== '' && plainPassword !== '') {
            if (plainPassword === password) {
                const credentials = {
                    email: email,
                    plainPassword: password
                }

                // const response = fetchAPI({
                //     url: 'https://localhost:8000/api/users', 
                //     method: 'POST', 
                //     body: JSON.stringify(credentials)
                // });

                // console.log(response);
                // fetch('https://192.168.1.56:8000/api/users', {
                //     method: 'POST',
                //     headers: {
                //         'accept': 'application/json',
                //     },
                //     body: JSON.stringify(credentials)
                // })
                //     .then(res => console.log(res))
                //     .catch(e => console.log('Erreur fetch api :', e))
            }
        }

        // try {
        //     const response = await fetch('https://reactnative.dev/movies.json');
        //     const json = await response.json();
        //     console.log(json);

        // } catch (error) {
        //     console.error(error);
        // }
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
        }
    })

    return (
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