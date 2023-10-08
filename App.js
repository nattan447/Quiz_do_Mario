import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Quesntion1 from "./components/question1";
import Quesntion2 from "./components/quesntion2";
import Question3 from "./components/question3"
import Question4 from "./components/quesntion4"
import Resultado from "./components/resultado"
import Home from "./components/home"
const Stack=createStackNavigator();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={Home} options={{headerShown:false}} ></Stack.Screen>
<Stack.Screen name="question1" component={Quesntion1} options={{headerShown:false}} ></Stack.Screen>
<Stack.Screen name="question2" component={Quesntion2} options={{headerShown:false}} ></Stack.Screen>
<Stack.Screen name="question3" component={Question3} options={{headerShown:false}} ></Stack.Screen>
<Stack.Screen name="question4" component={Question4} options={{headerShown:false}} ></Stack.Screen>
<Stack.Screen name="resultado" component={Resultado} options={{headerShown:false}} ></Stack.Screen>
</Stack.Navigator>
</NavigationContainer>

)
}

