import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,Button } from 'react-native';
import {useState,useMemo} from "react"
import Homestyle from "../estilos/homestyle"
import Questions from '../estilos/questions';
import RadioGroup from 'react-native-radio-buttons-group';
export default function Question3({route,navigation}) {
  const{acertos}=route.params;
  const [selectedId, setSelectedId] = useState();
  const radioButtons = useMemo(
    () => [
      {
        id: '1', 
        label: 'China',
        value: 'option1',
      },
      {
        id: '2',
        label: 'India',
        value: 'option2',
      },
           {
        id: '3',
        label: 'Brasil',
        value: 'option3',
      },
           {
        id: '4',
        label: 'japão',
        value: 'option4',
      },
    ],
    []
  );
  const nextquestion=()=>{
    navigation.navigate("question4",{acertos:selectedId==2?acertos+1:acertos})
  }
  return (
    <SafeAreaView style={Questions.container}>
      <Text>Questão 3</Text>
      <Text>Qual o país mais populoso do mundo?</Text>
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