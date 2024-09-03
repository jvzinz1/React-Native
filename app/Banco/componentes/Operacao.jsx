
import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

export default function Operacao({ saldoAtual, showErro, showConfirm }) {
    const [valor, setValor] = useState('');

    const handleValueChange = (text) => setValor(text);
    const isValidValue = (value) => !isNaN(value) && value > 0;

    const handleSaque = () => {
        const value = parseFloat(valor);
        if (isValidValue(value) && value <= saldoAtual) {
            showConfirm(value, 'saque');
        } else {
            showErro();
        }
    };

    const handleDeposito = () => {
        const value = parseFloat(valor);
        if (isValidValue(value)) {
            showConfirm(value, 'deposito');
        } else {
            showErro();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={valor}
                onChangeText={handleValueChange}
                placeholder="0,00"
            />
            <Pressable style={styles.button} onPress={handleSaque}>
                <Text style={styles.textButton}>Sacar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleDeposito}>
                <Text style={styles.textButton}>Depositar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        padding: 16,
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#EDEFF1',
        paddingHorizontal: 8,
        fontSize: 16,
        width: '100%',
        marginBottom: 15,
    },
    button: {
        padding: 15,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
        textTransform: 'uppercase',
    },
});
