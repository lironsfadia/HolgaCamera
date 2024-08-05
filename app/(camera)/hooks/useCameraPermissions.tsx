import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useCameraPermission } from 'react-native-vision-camera';

const useCameraPermissions = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const {
    hasPermission: microphonePermission,
    requestPermission: requestMicrophonePermission,
  } = useCameraPermission();

  return {
    hasPermission,
    requestPermission,
    microphonePermission,
    requestMicrophonePermission,
  };
};

export default useCameraPermissions;

const styles = StyleSheet.create({});
