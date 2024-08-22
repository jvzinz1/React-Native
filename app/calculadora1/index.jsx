import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [res, setRes] = useState(null)

  function op(op) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let c;
    switch (op) {
      case '+':
        c = a + b;
        break;
      case '-':
        c = a - b;
        break;
      case '*':
        c = a * b;
        break;
      case '/':
        c = a / b;
        break;
      case '**':
        c = a ** b;
        break;
    }
    if (isNaN(c)) setRes('Valor inválido no input');
    else setRes(c);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.numbers}>
        <TextInput
          style={styles.input}
          onChangeText={setNum1}
          value={num1}
          placeholder="Digite o primeiro número"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNum2}
          value={num2}
          placeholder="Digite o segundo número"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => op('+')}
          title="+"
          color="#1E90FF"
        />
        <Button
          onPress={() => op('-')}
          title="-"
          color="#1E90FF"
        />
        <Button
          onPress={() => op('*')}
          title="*"
          color="#1E90FF"
        />
        <Button
          onPress={() => op('/')}
          title="/"
          color="#1E90FF"
        />
        <Button
          onPress={() => op('**')}
          title="**"
          color="#1E90FF"
        />
      </View>
      <Text style={styles.result}>{res}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  numbers: {
    backgroundColor: '#1E90FF',
    padding: 6,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: 220,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#1E90FF',
    color: '#fff',
    minWidth: 80,  
    justifyContent: 'center',
    padding: 3,
    display: 'flex',
    borderRadius: 10,
  }
})

export default App;