import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,Button } from 'react-native';
import {useState,useMemo} from "react"
import Homestyle from "../estilos/homestyle"
import Questions from '../estilos/questions';
import RadioGroup from 'react-native-radio-buttons-group';
export default function Question2({route,navigation}) {
  const{acertos}=route.params;
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: '1', 
        label: 'dia 30',
        value: 'option1',
      },
      {
        id: '2',
        label: 'dia 20',
        value: 'option2',
      },
           {
        id: '3',
        label: 'dia 14',
        value: 'option3',
      },
           {
        id: '4',
        label: 'dia 17',
        value: 'option4',
      },
    ],
    []
  );
  const nextquestion=()=>{
    navigation.navigate("question3",{acertos:selectedId==1?acertos+1:acertos})
  }
  return (
    <SafeAreaView style={Questions.container}>
      <Text>QUESTÃO 2</Text>
      <Text>Quando é o dia do sasci</Text>
      <View style={Questions.alternativasvw}></View>
   <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
      <TouchableOpacity onPress={nextquestion} style={Homestyle.btn}>
    <Text style={Homestyle.btntxt}>ir para à próxima</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}
