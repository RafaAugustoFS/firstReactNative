import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function CadNews() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [endereco, setEndereco] = useState("");
  const [phone, setPhone] = useState("");
  const [genero, setGenero] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    endereco: "",
    phone: "",
    genero: "",
    passwordValidation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!nome || !email || !password) {
      alert("Preencha todos os campos.");
      return;
    }
    if(password != passwordValidation){
        alert('senha incorreta');
        return;
    }

    console.log("Nome: " + nome + ", Email: " + email + ", Senha:" + password);
    //Aqui você pode lidar com o envio dos dados
    setFormData({
      nome: "",
      email: "",
      password: "",
      endereco: "",
      phone: "",
      genero: "",
      passwordValidation: "",
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="digite seu nome:"
        value={formData.nome}
        onChangeText={(value) => handleChange('nome', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="digite seu email:"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="digite seu endereço:"
        value={formData.endereco}
        onChangeText={(value) => handleChange('endereco', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="digite seu telefone:"
        value={formData.phone}
        onChangeText={(value) => handleChange('phone', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="digite seu gênero:"
        value={formData.genero}
        onChangeText={(value) => handleChange('genero', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha:"
        secureTextEntry={true}
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha:"
        secureTextEntry={true}
        value={formData.passwordValidation}
        onChangeText={(value) => handleChange('passwordValidation', value)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {nome && email && password && (
        <Text>
          Nome: {nome}, email: {email}, password: {password}
          {/* adicionando uma máscara para senha */}
          password: {"*".repeat(password.length)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
