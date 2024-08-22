import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Buttons from './componentes/Buttons';

export default function App() {
  const [display, setDisplay] = useState('');

  const addToDisplay = (value) => {
    setDisplay(display + value);
  };

  const limpar = () => {
    setDisplay('');
  };

  const limpar1 = () => {
    setDisplay(display.substring(0, display.length - 1));
  };

  const calcular = () => {
    try {
      let result = eval(display);
      setDisplay(result.toString());
    } catch (e) {
      setDisplay('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculadora}>
        <TextInput style={styles.display} value={display} editable={false} />
        <Buttons
          styleOne={styles.ope}
          funcOne={limpar1}
          textOne='CE'

          styleTwo={styles.ope}
          funcTwo={limpar}
          textTwo='C'

          styleThree={styles.ope}
          funcThree={calcular}
          textThree='='

          styleFour={styles.ope}
          funcFour={() => addToDisplay('.')}
          textFour='.' />

        <Buttons
          styleOne={styles.ope}
          funcOne={() => addToDisplay('*')}
          textOne='*'

          styleTwo={styles.ope}
          funcTwo={() => addToDisplay('/')}
          textTwo='/'

          styleThree={styles.ope}
          funcThree={() => addToDisplay('+')}
          textThree='+'

          styleFour={styles.ope}
          funcFour={() => addToDisplay('-')}
          textFour='-' />

        <Buttons
          styleOne={styles.num}
          funcOne={() => addToDisplay('1')}
          textOne='1'

          styleTwo={styles.num}
          funcTwo={() => addToDisplay('2')}
          textTwo='2'

          styleThree={styles.num}
          funcThree={() => addToDisplay('3')}
          textThree='3'

          styleFour={styles.num}
          funcFour={() => addToDisplay('4')}
          textFour='4' />

        <Buttons
          styleOne={styles.num}
          funcOne={() => addToDisplay('5')}
          textOne='5'

          styleTwo={styles.num}
          funcTwo={() => addToDisplay('6')}
          textTwo='6'

          styleThree={styles.num}
          funcThree={() => addToDisplay('7')}
          textThree='7'

          styleFour={styles.num}
          funcFour={() => addToDisplay('8')}
          textFour='8' />

        <Buttons
          styleOne={styles.num}
          funcOne={() => addToDisplay('9')}
          textOne='9'

          styleTwo={styles.num}
          funcTwo={() => addToDisplay('0')}
          textTwo='0' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  calculadora: {
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 15
  },
  display: {
    backgroundColor: 'white',
    height: 35,
    paddingLeft: 5
  },
  ope: {
    backgroundColor: 'yellow',
  },
  num: {
    backgroundColor: 'gray',
  }
});