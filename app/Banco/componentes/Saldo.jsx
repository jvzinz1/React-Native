import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Saldo({ saldo }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/santander.png')}
            />
            <Text style={styles.title}>Saldo Atual da Conta</Text>
            <Text style={styles.value}>R$ {saldo.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    logo: {
        transform: [{ scale: 0.4 }],
        marginBottom: 20,
    },
    title: {
        color: '#a3a3a3',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10,
    },
    value: {
        color: '#000',
        letterSpacing: 2,
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});