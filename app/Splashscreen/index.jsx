import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const logo = ('../../assets/splashscreen.png')
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 9, y: 5 }}
        end={{ x: 6, y: 9 }}
        colors={['red', '#000000',]}
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={{
          uri : logo,
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo:{
    width: 420,
    height: 300,
  },
});