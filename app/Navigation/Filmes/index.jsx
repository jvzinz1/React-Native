import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MoviesList({ navigation }) {
    const movies = [
        { id: 1, title: 'Até que a sorte nos separe', image: require('../Img/hassum.jpg') },
        { id: 2, title: '+Velozes e +Furiosos', image: require('../Img/velozes.jpg') },
        { id: 3, title: 'Alerta Vermelho', image: require('../Img/alertavermelho.jpg') },
        { id: 4, title: 'Fique Rico ou morra tentando', image: require('../Img/50cent.jpg') }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.titulo}>FILMES</Text>
            </View>
            {movies.map((movie) => (
                <TouchableOpacity 
                    key={movie.id} 
                    style={styles.item} 
                    onPress={() => navigation.navigate('MovieDetails', { movieId: movie.id })}
                >
                    <Image style={styles.imagem} source={movie.image}></Image>
                    <Text style={styles.text1}>{movie.title}</Text>
                </TouchableOpacity>
            ))}
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
        fontWeight: 'bold',
    },
    item: {
        marginBottom: 20,
        alignItems: 'center',
    },
    imagem: {
        width: 350,
        height: 500,
        borderRadius: 3,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});