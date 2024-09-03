import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    input:{
        backgroundColor:'grey',
        padding:'15px',
        margin:'20px',
        width:'300px',
        borderRadius:'15px',
        
    },
    body:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    botaotexto:{
        borderRadius:'15px',
        margin:"30px",
        backgroundColor: 'black',
        width:'300px',
        color:'white',
        padding:"5px",
        fontWeight:'bold',
    },
    texto:{
        color:'white',
        textAlign:'center',
    },
    botao:{
        borderRadius:'90px',
        margin:"30px",
        backgroundColor: 'black',
        width:'300px',
        color:'white',
        padding:"20px",
        fontWeight:'bold',
    },
    textoBotao:{
        color:"white",
        alignItems:'center'

    }

    
    

})

export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('user criado com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}


return (
    <SafeAreaView style={style.body}>
        <View style={style.botaotexto}>
            <Text style={style.texto}>Registre-se</Text>
        </View>
        <View>  
            <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Seu nome"
            /><TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Sua senha"
                secureTextEntry={true}
            />

           <View style={style.botao}>
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.textoBotao}>Cadastrar</Text>
                </Pressable>
            </View>

        </View>
    </SafeAreaView>

)
}