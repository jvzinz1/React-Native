import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Atividades</Text>
            <Link href="/Banco" style={styles.link}>- Banco</Link>
            <Link href="/calculadora1" style={styles.link}>- Calculadora1</Link>
            <Link href="/calculadora2" style={styles.link}>- Calculadora2</Link>
            <Link href="/Pokemon" style={styles.link}>- Pokémon</Link>
            <Link href="/Login" style={styles.link}>- Login</Link>
            <Link href="/Ifome" style={styles.link}>- Ifome</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    link: {
        fontSize: 16,
        margin: 8,
        color: 'white',
       
    },
    box:{ 
       padding: 60,
       borderRadius:5,
       backgroundColor: 'black',  
    },
    titulo:{
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Calibri',
        fontWeight: '800',
        color: 'white'
    }
});