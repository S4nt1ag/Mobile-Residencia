import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Text, TextInput, Alert, SafeAreaView } from 'react-native';

import {useState, useContext } from 'react';
import { AxiosInstance } from '../api/AxiosInstance';
import { DataContext } from '../context/DataContext';

export const LoginScreen = ({ navigation }) => {


  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const {armazenarDadosUsuario} = useContext(DataContext);


  const handleLogin = async () => {
    
    try{
      const resultado = await AxiosInstance.post('/auth/signin',{
        username: usuario,
        password: senha
      });

      if(resultado.status === 200){
        
        var jwtToken =resultado.data;
        armazenarDadosUsuario(jwtToken["accessToken"]);

        navigation.navigate('Home')

      } else {
        console.log('erro');
      }

    }catch (error){
      console.log('erro: ' + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/171/171322.png',
        }}
      />
      <Text style={styles.baseText}>Bem vindo</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsuario}
        value={usuario}
        placeholder="Usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Senha"
      />

      <Button
        title="Entrar"
        color="#efb810"
        onPress={handleLogin}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#964b00',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 9,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    borderRadius: 9,
  },

  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#efb810',
  },
});
