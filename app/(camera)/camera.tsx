import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import CameraControls from './components/CameraControls';
import VideoPlayer from './components/VideoPlayer';
import PhotoViewer from './components/PhotoViewer';
import CameraView from './components/CameraView';

const CameraScreen = () => {
  const { device, isActive, photo, video, cameraMode, camera, ...cameraProps } =
    CameraControls();

  if (!device) return <Text>Camera device not found</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      {video && <VideoPlayer video={video} />}
      {photo && (
        <PhotoViewer
          photo={photo}
          uploadPhoto={cameraProps.uploadPhoto}
          setPhoto={cameraProps.setPhoto}
        />
      )}
      {!photo && !video && (
        <CameraView
          camera={camera}
          device={device}
          isActive={isActive}
          cameraMode={cameraMode}
          {...cameraProps}
        />
      )}
    </View>
  );
};

export default CameraScreen;
