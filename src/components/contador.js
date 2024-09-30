import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(' ');

    useEffect(() =>{
        setMsg('O valor do contador foi atualizado ' + count + ' vez(es)')
    }, [count])
  return (
    <>
      <Text style={style.texto}> Número de clicks {count}</Text>
      <Text>{msg}</Text>

      <View style={style.buttonList}>
        <Button 
            onPress={() =>{
                setCount(count +1)
            }}
            title='Aumentar'
        />
      </View>

      <View style={style.buttonList}>
        <Button 
            onPress={() =>{
                setCount(count -1)
            }}
            title='Diminuir'
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({
    buttonList:{
        padding: 10,
    },
    texto: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 26,
        marginLeft: 20,
        marginTop:8
    }
})