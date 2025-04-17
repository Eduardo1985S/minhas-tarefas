# Minhas Tarefas - App de Lista de Tarefas

Um aplicativo simples e intuitivo de lista de tarefas (To-Do List) desenvolvido com React Native e Expo, com persistência de dados local.

## 📱 Sobre o Projeto

"Minhas Tarefas" é um aplicativo móvel que permite aos usuários gerenciar suas tarefas diárias de forma simples e eficiente. Desenvolvido como projeto educacional para o curso Técnico em Desenvolvimento de Sistemas, na disciplina de **Persistência de Dados em Aplicações Mobile**.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento de aplicações móveis
- **Expo** - Plataforma para simplificar o desenvolvimento React Native
- **Expo Router** - Sistema de navegação baseado em arquivos
- **AsyncStorage** - API para armazenamento de dados persistentes no dispositivo
- **@expo/vector-icons** - Biblioteca de ícones integrada ao Expo
- **StyleSheet** - API nativa para estilização de componentes

## 🧠 Funcionalidades

- Adicionar novas tarefas à lista
- Visualizar todas as tarefas salvas
- Persistência automática de dados (tarefas salvas mesmo ao fechar o aplicativo)
- Excluir tarefas com confirmação via alerta
- Interface de usuário simples e amigável

## 📁 Estrutura do Projeto

```
/minhas-tarefas
 ├── /app
 │    ├── index.js    # Tela principal com lista de tarefas
 │    ├── add-task.js # Tela para adicionar novas tarefas
 │    └── _layout.js  # Layout de navegação do Expo Router
 └── app.json         # Configurações do projeto Expo
```

## 🛠️ Como Instalar e Executar

1. Clone este repositório
   ```bash
   git clone https://github.com/Eduardo1985S/minhas-tarefas.git
   cd minhas-tarefas
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o projeto
   ```bash
   npx expo start
   # ou
   yarn expo start
   ```

4. Escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel ou utilize um emulador

## 👨‍🏫 Propósito Educacional

Este projeto foi desenvolvido para alunos do curso Técnico em Desenvolvimento de Sistemas, como parte da aula de **Persistência de Dados em Aplicações Mobile** com React Native. O aplicativo demonstra como implementar armazenamento local utilizando AsyncStorage para persistir dados entre sessões do aplicativo.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido como material educacional para o curso Técnico em Desenvolvimento de Sistemas.
