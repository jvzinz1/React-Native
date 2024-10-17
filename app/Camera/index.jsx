import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, Pressable, Linking } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as mediaLibrary from 'expo-media-library';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');
    const [scanning, setScanning] = useState(false); 

    if (!permissao) {
        return <View></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.permissao}>Você precisa dar permissão para utilizar a câmera</Text>
                <Button title="pedir permissão" onPress={pedirPermissao} />
            </View>
        );
    }

    const handleBarCodeScanned = ({ type, data }) => {
        Linking.openURL(data).catch(err => console.error("Erro ao abrir a URL:", err));
        setScanning(false);
    };

    const tirarFoto = async () => {
        const foto64 = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        });
        setFoto(foto64);
        console.log(foto64);
    };

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    const salvarFoto = async () => {
        await mediaLibrary.saveToLibraryAsync(foto.uri);
        setFoto(null);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View>
                    <Button title='Descartar imagem' onPress={() => setFoto(null)} />
                    <Button title='Salvar Imagem' onPress={salvarFoto} />
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                </View>
            ) :
             scanning ? (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            ) 
            : (
                <CameraView style={styles.camera} facing={ladoCamera} ref={cameraRef}>
                    <View style={styles.botaosalvar}>
                        <Pressable onPress={tirarFoto}>
                            <Image source={require('./img/foto.png')} style={styles.iconfoto} />
                        </Pressable>
                        <Pressable onPress={inverterLadoCamera}>
                            <Image source={require('./img/inverter.png')} style={styles.iconinvert} />
                        </Pressable>
                        <Pressable onPress={() => setScanning(true)}>
                          <Image source={require('./img/qr.png')} style={styles.qrcode} />
                        </Pressable>
                    </View>
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    permissao: {
        textAlign: 'center',
        marginBottom: 20,
    },
    camera: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    botaosalvar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    iconfoto: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
    },
    iconinvert: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
    },
    qrcode: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
    },
    
});