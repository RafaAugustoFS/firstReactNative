import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={style.header}>
        <Text style={style.titleHeader}>Detalhes do sistema</Text>
      </View>
      <View style={style.listDespription}>
        <Text style={style.listName}>Lista de compras</Text>
      </View>
      
    
    </>
  );
}

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    backgroundColor: "blue",
  },
  titleHeader: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
