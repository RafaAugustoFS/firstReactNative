import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Texto() {
    const [texto, setTexto] = useState('Texto novo componente')
    useEffect(() =>{
        setTexto('Outro texto')
    }, []);
  return (
    <Text style={style.texto}>
      {texto}
    </Text>
  )
}

const style = StyleSheet.create({
    texto: {
        color: '#CD3333',
        fontWeight: 'bold',
        fontSize: 26,
        marginLeft: 20,
        marginTop:8
    }
})