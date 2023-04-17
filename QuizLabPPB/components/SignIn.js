import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validEmail, setValidEmail] = useState("")
    const handlerEmail = (value) => {
        if (value) {
            setValidEmail("")
        } else {
            setValidEmail("This field is required")
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginBottom: 10 }}>
                <Text>Email</Text>
                <TextInput
                    placeholder='npm@student.ibik.ac.id'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    defaultValue={email}
                    onChangeText={(text) => handlerEmail(text)}
                    style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginTop: 10 }}
                />
                <Text>{validEmail}</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Enter password'
                    autoCorrect={false}
                    defaultValue={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginTop: 10 }}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <View style={{ borderRadius: 5, backgroundColor: 'purple', padding: 10 }}>
                    <Text style={{ color: 'white' }}>Log In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default SignIn