import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,Button } from 'react-native';
import {useState,useMemo} from "react"
import Homestyle from "../estilos/homestyle"
import Questions from '../estilos/questions';
import RadioGroup from 'react-native-radio-buttons-group';
export default function Question4({route,navigation}) {
  const{acertos}=route.params;
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: '1', 
        label: 'mar morto',
        value: 'option1',
      },
      {
        id: '2',
        label: 'nilo',
        value: 'option2',
      },
           {
        id: '3',
        label: 'Oceano pacífico',
        value: 'option3',
      },
           {
        id: '4',
        label: 'oceano atlântico',
        value: 'option4',
      },
    ],
    []
  );
  const nextquestion=()=>{
    navigation.navigate("resultado",    {acertos:selectedId==3?acertos+1:acertos})

  }
  return (
    <SafeAreaView style={Questions.container}>
      <Text>Questão 4</Text>
      <Text>Qual o maior oceano da terra</Text>
      <View style={Questions.alternativasvw}></View>
   <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
<TouchableOpacity onPress={nextquestion} style={Homestyle.btn}>
    <Text style={Homestyle.btntxt}>ver o resultado</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}