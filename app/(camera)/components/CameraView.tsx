import React from 'react';
import { View, Pressable } from 'react-native';
import { Camera, CameraDevice } from 'react-native-vision-camera';
import FlashIcon from '../ui/flashIcon';
import QrIcon from '../ui/qrIcon';
import CaptureButton from './CaptureButton';

interface CameraViewProps {
  device: CameraDevice;
  isActive: boolean;
  cameraMode: 'camera' | 'qr';
  codeScanner: any;
  flashMode: 'on' | 'off' | 'auto' | undefined;
  setFlashMode: (mode: 'on' | 'off' | 'auto' | undefined) => void;
  onTakePhotoPressed: () => void;
  onStartRecording: () => void;
  isRecording: boolean;
  setCameraMode: (mode: 'camera' | 'qr') => void;
}

const CameraView = ({
  device,
  isActive,
  cameraMode,
  codeScanner,
  flashMode,
  setFlashMode,
  onTakePhotoPressed,
  onStartRecording,
  isRecording,
  setCameraMode,
}: CameraViewProps) => {
  return (
    <>
      <Camera
        codeScanner={codeScanner}
        isActive={isActive && cameraMode === 'qr'}
        device={device}
      />
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={isActive && cameraMode === 'camera'}
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
      <CaptureButton
        pressHandler={onTakePhotoPressed}
        longPressHandler={onStartRecording}
        isRecording={isRecording}
      />
    </>
  );
};

export default CameraView;
