import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useMemo, useState } from 'react';
import { TakePhotoOptions } from 'react-native-vision-camera';
import FlashControl from '../components/FlashControl';

type FlashProps = {
  styles: any;
  mode: 'on' | 'off' | 'auto' | undefined;
  flashHandler: (mode: TakePhotoOptions['flash']) => void;
};

const FlashIcon = ({ styles, mode, flashHandler }: FlashProps) => {
  const { flashIcon, onPress } = FlashControl({ mode, flashHandler });
  return (
    <View style={styles}>
      <Ionicons name={flashIcon} size={24} color="white" onPress={onPress} />
    </View>
  );
};

export default FlashIcon;
