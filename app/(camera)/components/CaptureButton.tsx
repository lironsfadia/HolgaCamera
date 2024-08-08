import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CaptureButtonProps {
  pressHandler: () => void;
  longPressHandler: () => void;
  isRecording: boolean;
}
const CaptureButton = ({
  pressHandler,
  longPressHandler,
  isRecording,
}: CaptureButtonProps) => {
  return (
    <Pressable
      onPress={pressHandler}
      onLongPress={longPressHandler}
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
  );
};

export default CaptureButton;

const styles = StyleSheet.create({});
