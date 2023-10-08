import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import Homestyle from "../estilos/homestyle"
  export default function Home({navigation}) {
  const startquis=()=>{
navigation.navigate("question1");
  }
  return (
    <SafeAreaView style={Homestyle.container}>
      <Text style={Homestyle.quiztxt}>Quiz do Mario</Text>
    <Text style={Homestyle.infotxt}>5 perguntas sobre conhecimentos gerais!</Text>
    <View>
    <TouchableOpacity onPress={startquis} style={Homestyle.btn}>
    <Text style={Homestyle.btntxt}>Começar o quiz</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
