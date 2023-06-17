import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Text, TextInput, Alert, SafeAreaView } from 'react-native';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
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
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Senha"
      />

      <Button
        title="Entrar"
        color="#FDB927"
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552583',
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
    backgroundColor: '#FFF',
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
    color: '#FDB927',
  },
});

export default Login;