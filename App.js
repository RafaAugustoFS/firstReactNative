import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prime from './src/view/prime';
import List from './src/components/listComponent'
import Counter from './src/components/contador';
import Texto from './src/components/texto';
import CadNews from './src/components/cadNews';

export default function App() {
  return (
    <ScrollView>
      {/* <Text>Olá Rafa!</Text> */}
      <Prime />
      <List/> 
      <Texto/>
      <CadNews/>
      <Counter/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}