import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Pressable, Linking } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Claudiano');

  const abrirWhatsApp = () => {
    const numero = '5583993291505';
    const url = `https://wa.me/${numero}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/200283471?s=400&u=b6e6d00fa71d84b4b8ab73b4d130adce49742d03&v=4',
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>{nome}</Text>

        <Pressable style={styles.button} onPress={abrirWhatsApp}>
          <Text style={styles.buttonText}>WhatsApp: 83 99329-1505</Text>
        </Pressable>

        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2eef7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardRow: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 900,
    gap: 18,
  },
  card: {
    flex: 1,
    backgroundColor: '#f7f5f8',
    borderLeftWidth: 4,
    borderLeftColor: '#d39a49',
    borderRadius: 8,
    padding: 22,
    minHeight: 260,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2f2f2f',
    marginBottom: 14,
    textTransform: 'uppercase',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 18,
    color: '#d39a49',
    marginRight: 8,
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
    color: '#3a3a3a',
    flexShrink: 1,
  },
  profileBox: {
    marginTop: 30,
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#f7f5f8',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 13,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  input: {
    width: '100%',
    height: 46,
    borderWidth: 1,
    borderColor: '#d9d0e3',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
});
