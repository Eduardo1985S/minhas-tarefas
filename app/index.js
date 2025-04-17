import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) {
      setLista(JSON.parse(dados));
    }
  };

  const salvarTarefas = async (novasTarefas) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  };

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    const novaLista = [...lista, { id: Date.now().toString(), texto: tarefa }];
    setLista(novaLista);
    salvarTarefas(novaLista);
    setTarefa('');
  };

  const confirmarExclusao = (id) => {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => excluirTarefa(id),
        },
      ],
      { cancelable: true }
    );
  };

  const excluirTarefa = (id) => {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
    salvarTarefas(novaLista);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 Minhas Tarefas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>✅ {item.texto}</Text>
            <TouchableOpacity onPress={() => confirmarExclusao(item.id)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemTexto: {
    fontSize: 18,
  },
});
