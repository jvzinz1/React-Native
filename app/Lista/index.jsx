import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';

const DATA = [
    { id: '1', nome: 'Fazer um bolo' },
    { id: '2', nome: 'Ir na praia' },
    { id: '3', nome: 'Da um pau no talarico' },
    { id: '4', nome: 'Ver futebol' },
];

const Item = ({ nome, concluido, onPress, id }) => (
    <Pressable onPress={onPress} style={styles.item}>
        <Text style={concluido ? styles.concluido : styles.text}>{id} - {nome}</Text>
    </Pressable>
);

const App = () => {
    const [tarefas, setTarefas] = useState(DATA);

    const toggleTarefa = (id) => {
        setTarefas(tarefas.map(item =>
            item.id === id ? { ...item, concluido: !item.concluido } : item
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.lista}>
                <FlatList
                    data={tarefas}
                    renderItem={({ item }) => (
                        <Item
                            nome={item.nome}
                            id={item.id}
                            concluido={item.concluido}
                            onPress={() => toggleTarefa(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
                <Text style={styles.title}>Lista de Tarefas</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 10
    },
    lista: {
        backgroundColor: 'black',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 4,
        flex: 1,
        padding: 5,
        alignItems: 'center',
        borderBottomRightRadius: 50,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    item: {
        padding: 20,
    },
    text: {
        fontSize: 25,
        color: '#fff'
    },
    concluido: {
        fontSize: 25,
        color: '#969696',
        textDecorationLine: 'line-through',
    },
});

export default App;