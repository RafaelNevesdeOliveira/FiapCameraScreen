import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

export default function App() {
  const [gravando, setGravando] = useState(false);
  const [arquivoPath, setArquivoPath] = useState<string | null>(null);
  let camera: RNCamera | null = null;

  const tirarFoto = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log('Imagem capturada em:', data.uri);

      const novoPath = `${RNFS.DocumentDirectoryPath}/MinhaFoto_${Date.now()}.jpg`;

      try{
        await RNFS.moveFile(data.uri.replace('file://', ''), novoPath);
        console.log('Imagem movida para:', novoPath);
        setArquivoPath(novoPath);
      }catch(error){
        console.error('Erro ao mover a imagem:', error);
      }
  } 
}

const iniciarGravacao = async () => {
  if (camera){
    try{
      setGravando(true)

      const promise = camera.recordAsync()
      if(promise){
        const data = await promise

        console.log('Vídeo gravado em:', data.uri);

        const novoPath = `${RNFS.DocumentDirectoryPath}/MeuVideo_${Date.now()}.mp4`;

        try{
          await RNFS.moveFile(data.uri.replace('file://', ''), novoPath);
            console.log('Vídeo movido para:', novoPath);
            setArquivoPath(novoPath)
        }catch(error){
          console.error('Erro ao mover o vídeo:', error);
        }

      }


    }catch(error){
      console.error(error);
    }finally{
      setGravando(false)
    }
  }else{
    console.log("Gravação não é suportada no simulador.");
  }
}
  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={Platform.OS !== 'ios'} 
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos de sua permissão para usar a câmera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
      />
            <View style={styles.control}>
        <TouchableOpacity onPress={tirarFoto}>
          <Text style={styles.capture}> FOTO </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={iniciarGravacao}>
          <Text style={styles.capture}>{gravando ? 'PARAR' : 'GRAVAR'}</Text>
        </TouchableOpacity>
      </View>
      {arquivoPath && (
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>
          Arquivo salvo em: {arquivoPath}
        </Text>
      )}
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  control: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
