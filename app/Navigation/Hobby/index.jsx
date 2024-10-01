import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Page() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
            <Text style={styles.titulo}>Hobbys</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    titulo: {
        fontSize: 50,
        padding: 5,
        fontWeight: 'bold'
    },
    item: {
        marginBottom: 20,
        alignItems: 'center',
    },
    imagem: {
        width: 400,
        height: 300,
        borderRadius: 3,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})