import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
const welcome = () => {
    const router = useRouter()
  return (
    <LinearGradient colors={['#A5B5A5', '#0950AB']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}

    >
     <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
            <AntDesign style={styles.logo} name="bank" />
            <Text style={{color: '#FFF', fontSize:32}}>Fit Wear</Text>
            <Text style={{color: '#FFF', fontSize:18, marginBottom: 20}}>Seja Bem vindo!</Text>
        </View>
        <TouchableOpacity onPress={() => router.replace('/login')} style={styles.loginButton}><Text style={{color: '#FFF'}}>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('/register')} style={styles.registerButton}><Text style={{color: '#2B2B2B'}}>Registrar</Text></TouchableOpacity>
    
    </View>   

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        color: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    logo: {
        fontSize: 100,
        marginBottom: 20,
        color: '#FFF',
    },
    loginButton: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#A5B5A5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#A5B5A5',
    },

})

export default welcome