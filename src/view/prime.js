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

      <View style={style.containerItem}>
        <Text style={style.containerStyle}>
          Item 1  
        </Text>
        <Text style={style.description}>
          A lista de compras é um item obrigatório para ir ao supermercado e
          outros estabelecimentos do dia a dia. Afinal, com ela você consegue
          manter seus gastos dentro do planejado, pegar tudo o que precisa e
          evitar compras por impulso.
        </Text>

        <Text style={style.price}>R$ 40,00</Text>
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
  listDespription: {
    paddingTop: 20,
    marginLeft: 20,
  },
  listName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerItem:{
    backgroundColor:"#CDCDC1",
    marginLeft: 10,
    marginRight:10,
    borderRadius: 10
  },
  description: {
    paddingTop: 10,
    color: "#00008B",
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#CD3333",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 20,
  },
  containerStyle:{
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 15,
  }
});
