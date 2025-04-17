import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { salvarTarefa } from '../storage/taskStorage';

export default function AddTaskScreen() {
  const [tarefa, setTarefa] = useState('');
  const router = useRouter();

  const adicionar = async () => {
    if (tarefa.trim() === '') {
      Alert.alert('⚠️ Erro', 'Digite uma tarefa válida!');
      return;
    }

    await salvarTarefa(tarefa);
    setTarefa('');
    router.back(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Nova Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <Button title="💾 Salvar" onPress={adicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    fontSize: 18
  }
});
