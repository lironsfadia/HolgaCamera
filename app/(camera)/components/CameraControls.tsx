import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useCameraPermissions from '../hooks/useCameraPermissions';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useFocusEffect } from 'expo-router';
import {
  TakePhotoOptions,
  PhotoFile,
  VideoFile,
  useCameraDevice,
  Camera,
  useCodeScanner,
} from 'react-native-vision-camera';

const CameraControls = () => {
  const {
    hasPermission,
    requestPermission,
    hasPermission: microphonePermission,
    requestPermission: requestMicrophonePermission,
  } = useCameraPermissions();

  const [flashMode, setFlashMode] = useState<TakePhotoOptions['flash']>(
    'off' as const
  );

  if (!flashMode) {
    setFlashMode('off');
  }

  const [isActive, setIsActive] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile | null>(null);
  const [video, setVideo] = useState<VideoFile | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  // telephoto-camera - is the default camera
  const device = useCameraDevice('back', {
    physicalDevices: ['ultra-wide-angle-camera'],
  });
  const camera = useRef<Camera>(null);
  const [cameraMode, setCameraMode] = useState<'camera' | 'qr'>('camera');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (data) => {
      console.log('Scanned data:', data);
    },
  });

  const onTakePhotoPressed = async () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
      setVideo(video);
    } else {
      const photo = await camera.current?.takePhoto({ flash: flashMode });
      if (photo) {
        setPhoto(photo);
      }
    }
  };

  const onStartRecording = async () => {
    if (!camera.current) return;
    setIsRecording(true);
    camera.current?.startRecording({
      flash: flashMode === 'on' ? 'on' : 'off',
      onRecordingFinished: (video) => {
        console.log('Video recorded:', video);
        setIsRecording(false);
        setVideo(video);
      },
      onRecordingError: (error) => {
        console.error('Recording error:', error);
        setIsRecording(false);
      },
    });
  };

  const uploadPhoto = async () => {
    const photoPath = photo?.path ?? '';
    try {
      const result = await CameraRoll.save(photoPath, { type: 'photo' });
      console.log('Photo saved successfully:', result);
    } catch (error) {
      console.error('Failed to save photo:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => setIsActive(false);
    }, [])
  );

  useEffect(() => {
    if (!hasPermission) requestPermission();
    if (!microphonePermission) requestMicrophonePermission();
  }, [hasPermission, microphonePermission]);

  if (!hasPermission || !microphonePermission) return <ActivityIndicator />;

  return {
    hasPermission,
    requestPermission,
    microphonePermission,
    requestMicrophonePermission,
    flashMode,
    setFlashMode,
    isActive,
    setIsActive,
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
    cameraMode,
  };
};

export default CameraControls;

const styles = StyleSheet.create({});
