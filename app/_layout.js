import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '📋 Minhas Tarefas' }} />
      <Stack.Screen name="add-task" options={{ title: '➕ Nova Tarefa' }} />
    </Stack>
  );
}
