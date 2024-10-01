import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imagem} source={require('./Img/eu.png')}></Image>
            </View>
            <View style={styles.box}>
                <Text style={styles.titulo}>Bem-vindo(a) ao meu app!</Text>
            <Link href="/Navigation/Filmes" style={styles.link}>Filmes</Link>
            <Link href="/Navigation/Hobby" style={styles.link}>Hobby</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    box: {
        padding: 10,
    },
    titulo: {
        fontSize: 35,
        padding: 10,
    },
    link: {
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
        backgroundColor:'black',
        margin: 10,
        color: 'white',
        borderRadius: 30,
    },
})