# Camera App

Este projeto é um exemplo de como configurar um aplicativo React Native com Expo, utilizando a câmera do dispositivo e outras funcionalidades relacionadas, como informações do dispositivo e acesso ao sistema de arquivos.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina. Além disso, é recomendado ter o Expo CLI instalado globalmente.

## Passos para Configuração

1. **Criação do Projeto**

    Para criar um novo projeto Expo, execute o seguinte comando:
    ```bash
    npx create-expo-app Camera --template
    ```

2. **Instalar Dependências**

    As dependências listadas no projeto incluem:
    ```json
    {
      "dependencies": {
        "expo": "~51.0.28",
        "expo-status-bar": "~1.12.1",
        "install": "^0.13.0",
        "npm": "^10.8.2",
        "react": "18.2.0",
        "react-native": "0.74.5",
        "react-native-camera": "^4.2.1",
        "react-native-device-info": "^11.1.0",
        "react-native-fs": "^2.20.0"
      },
      "devDependencies": {
        "@babel/core": "^7.20.0",
        "@types/react": "~18.2.45",
        "typescript": "^5.1.3"
      }
    }
    ```
    Execute o seguinte comando para instalar todas as dependências:
    ```bash
    npm install
    ```

3. **Iniciar o Projeto**

    Para iniciar o servidor de desenvolvimento do Expo, use:
    ```bash
    npm start
    ```

4. **Executar o Projeto em Diferentes Plataformas**

    Para executar o projeto em um dispositivo Android, iOS ou na Web, utilize os seguintes comandos:

    - Android:
      ```bash
      npm run android
      ```

    - iOS:
      ```bash
      npm run ios
      ```

    - Web:
      ```bash
      npm run web
      ```

## Principais Funcionalidades

- **Câmera**: O projeto utiliza a biblioteca `react-native-camera` para acessar a câmera do dispositivo e capturar fotos e vídeos.
- **Informações do Dispositivo**: Utilizando `react-native-device-info`, o projeto pode obter informações detalhadas sobre o dispositivo em que está sendo executado.
- **Sistema de Arquivos**: A biblioteca `react-native-fs` é utilizada para interagir com o sistema de arquivos, permitindo salvar e ler arquivos localmente.

## Estrutura do Projeto

- **`App.js`**: Arquivo principal onde a lógica da aplicação e a configuração da câmera e outras funcionalidades são implementadas.
- **`package.json`**: Contém todas as dependências, scripts e configuração do projeto.
- **`node_modules/`**: Diretório que contém todas as bibliotecas instaladas.
- **`ios/` e `android/`**: Diretórios gerados após o prebuild, contendo os arquivos de configuração nativa para iOS e Android.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um `Pull Request` ou relatar um `Issue`.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para obter mais informações.
