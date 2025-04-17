import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'tarefas';

export async function salvarTarefa(novaTarefa) {
  const tarefasExistentes = await listarTarefas();
  const atualizadas = [...tarefasExistentes, novaTarefa];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(atualizadas));
}

export async function listarTarefas() {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
}
