import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,Button } from 'react-native';
import {useState,useMemo} from "react"
import Homestyle from "../estilos/homestyle"
import Questions from '../estilos/questions';
import RadioGroup from 'react-native-radio-buttons-group';
export default function Resultado({route,navigation}) {
  const{acertos}=route.params;
function backinitial(){
navigation.navigate("Home")
}
  return (
    <SafeAreaView style={Questions.container}>
      <Text> seus acertos foram {acertos}</Text>
      <TouchableOpacity onPress={backinitial} style={Homestyle.btn}>
    <Text style={Homestyle.btntxt}>voltar à pagina inicial</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}