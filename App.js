import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prime from './src/view/prime';

export default function App() {
  return (
    <ScrollView>
      {/* <Text>Olá Rafa!</Text> */}
      <Prime />
      <StatusBar style="auto" />
    </ScrollView>
  );
}