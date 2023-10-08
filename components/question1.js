import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import Homestyle from '../estilos/homestyle';
import Questions from '../estilos/questions';
import RadioGroup from 'react-native-radio-buttons-group';
export default function Question1({ navigation }) {
  const [ischecked, Setischecked] = useState(false);
  const [selectedId, setSelectedId] = useState();

  let acertos = 0;
  const radioButtons = useMemo(
    () => [
      {
        id: '1', 
        label: 'Jesus 1',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Bolsonaro',
        value: 'option2',
      },
           {
        id: '3',
        label: 'alvares',
        value: 'option3',
      },
           {
        id: '4',
        label: 'Mano marrom',
        value: 'option4',
      },
    ],
    []
  );

  const nextquestion = () => {
    navigation.navigate('question2', { acertos:  selectedId==3?acertos+1:acertos });
  };

  return (
    <SafeAreaView style={Questions.container}>
      <Text>QUESTÃO 1</Text>
      <Text>Quem descobriu o Brasil</Text>
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



























