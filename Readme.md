
## Observação

- Para o uso e teste apropriado de todas as funções de câmera em um projeto React Native, é recomendável conectar um dispositivo físico ao ambiente de desenvolvimento. Isso garante que todas as funcionalidades, como foco, flash e captura de imagem/vídeo, sejam testadas com precisão.

### 1. `npm install react-native-camera`
- Instala a biblioteca `react-native-camera` para capturar fotos, vídeos e acessar a câmera do dispositivo.
- Adiciona o pacote ao arquivo `package.json` do projeto.

### 2. `npx expo prebuild --clean`
- Gera ou recria os arquivos nativos do projeto Expo, permitindo personalizações nativas.
- A flag `--clean` garante uma recriação completa, removendo modificações anteriores.

### 3. `npx expo run:ios`
- Compila e executa o aplicativo em um simulador iOS ou dispositivo físico conectado.
- Testa o aplicativo em um ambiente iOS real, exibindo erros de compilação ou execução.

### 4. `npm install react-native-fs`
- Instala a biblioteca `react-native-fs` para manipular o sistema de arquivos do dispositivo.
- Adiciona o pacote ao `package.json`, permitindo operações de leitura e escrita em arquivos.

### 5. `npm i react-native-device-info`
- Instala a biblioteca `react-native-device-info` para obter informações detalhadas do dispositivo.
- Adiciona o pacote ao projeto, permitindo acessar dados como modelo e sistema operacional.
