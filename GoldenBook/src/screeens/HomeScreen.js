import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import { useContext, useState, useEffect } from 'react';
import { AxiosInstance } from '../api/AxiosInstance';
import { DataContext } from '../context/DataContext';

const ItemC = ({ img }) => (
  <Image
    style={styles.editorasLogo}
    source={{
      uri: `data:image/png;base64,${img}`
    }}
  />
);

const ItemL = ({ imagem }) => (
  <Image
    style={styles.LivrosLogo}
    source={{
      uri: `data:image/png;base64,${imagem}`
    }}
  />
);

export const HomeScreen = () => {
  const { dadosUsuario } = useContext(DataContext);
  const [dadosEditora, setDadosEditora] = useState();
  const [dadosLivros, setDadosLivros] = useState();

  useEffect(() => {
    getTodasEditoras();
    getTodosLivros();
  }, []);

  const getTodasEditoras = async () => {
    await AxiosInstance.get(
      '/editoras',
      { headers: { "Authorization": `Bearer ${dadosUsuario?.token}` } }
    ).then(resultado => {
      setDadosEditora(resultado.data);
    }).catch((error) => {
      console.log('error' + error);
    })
  }

  const getTodosLivros = async () => {
    await AxiosInstance.get(
      '/livros',
      { headers: { "Authorization": `Bearer ${dadosUsuario?.token}` } }
    ).then(resultado => {
      setDadosLivros(resultado.data);
    }).catch((error) => {
      console.log('error' + error);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subText}>Editoras</Text>
      <FlatList
        data={dadosEditora}
        renderItem={({ item }) => <ItemC img={item.img} />}
        keyExtractor={item => item.codigoEditora}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.subText}>Livros</Text>
      <FlatList
        data={dadosLivros}
        renderItem={({ item }) => <ItemL imagem={item.imagem} />}
        keyExtractor={item => item.codigoLivro}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.subText}>Destaques</Text>
      <FlatList
        data={dadosLivros}
        renderItem={({ item }) => <ItemL imagem={item.imagem} />}
        keyExtractor={item => item.codigoLivro}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
  },
  subText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#efb810',
  },
  editorasLogo: {
    width: 130,
    height: 130,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  LivrosLogo: {
    width: 135,
    height: 205,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});