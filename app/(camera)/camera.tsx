import { Stack, } from 'expo-router';
import React, from 'react';
import { View, Text, Pressable, Image, Button } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import { FontAwesome5 } from '@expo/vector-icons';
import FlashIcon from './ui/flashIcon';
import { ResizeMode, Video } from 'expo-av';
import QrIcon from './ui/qrIcon';
import CameraControls from './components/CameraControls';

const CameraScreen = () => {
  const { 
    flashMode,
    setFlashMode,
    isActive,
    photo,
    video,
    setPhoto,
    device,
    onTakePhotoPressed,
    onStartRecording,
    uploadPhoto,
    isRecording, 
    codeScanner, 
    setCameraMode, 
    cameraMode
  }: {
    flashMode: string,
    setFlashMode: (mode: string) => void,
    isActive: boolean,
    photo: any,
    video: any,
    setPhoto: (photo: any) => void,
    device: any,
    onTakePhotoPressed: () => void,
    onStartRecording: () => void,
    uploadPhoto: () => void,
    isRecording: boolean,
    codeScanner: any,
    setCameraMode: (mode: string) => void,
    cameraMode: string
  } = CameraControls()

  if (!device) return <Text>Camera device not found</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      {video && (
        <Video
          style={{ flex: 1 }}
          source={{ uri: video.path }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      )}

      {video && (
        <Video
          style={{ flex: 1 }}
          source={{
            uri: video.path,
          }}
          useNativeControls
          isLooping
        />
      )}
      {photo && (
        <>
          <Image source={{ uri: photo.path }} style={{ flex: 1 }} />
          <View style={{ position: 'absolute', bottom: 50, width: '100%' }}>
            <Button title="Upload" onPress={uploadPhoto} />
          </View>
          <FontAwesome5
            onPress={() => setPhoto(null)}
            name="arrow-left"
            size={24}
            color="white"
            style={{ position: 'absolute', top: 50, left: 20 }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              paddingBottom: 20,
              backgroundColor: 'white',
            }}
          >
            <Button title="Upload" onPress={uploadPhoto} />
          </View>
        </>
      )}

      {!photo && !video && (
        <>
          <Camera
            codeScanner={codeScanner}
            isActive={isActive && !photo && !video && cameraMode === 'qr'}
            device={device}
          />
          <Camera
            ref={camera}
            style={{ flex: 1 }}
            device={device}
            isActive={isActive && !photo && !video && cameraMode === 'camera'}
            photo={true}
          />
          <FlashIcon
            flashHandler={() => setFlashMode('auto')}
            mode={flashMode}
            styles={{
              position: 'absolute',
              alignSelf: 'center',
              top: 50,
              left: 20,
            }}
          />
          <QrIcon onPress={() => setCameraMode('qr')} />
          <Pressable
            onPress={onTakePhotoPressed}
            onLongPress={onStartRecording}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              bottom: 50,
              width: 75,
              height: 75,
              backgroundColor: isRecording ? 'red' : 'white',
              borderRadius: 75,
            }}
          />
        </>
      )}
    </View>
  );
};

export default CameraScreen;
