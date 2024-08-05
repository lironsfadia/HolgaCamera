import React, { useCallback, useMemo } from 'react';
import { TakePhotoOptions } from 'react-native-vision-camera';

interface FlashControlProps {
  mode: 'on' | 'off' | 'auto' | undefined;
  flashHandler: (mode: TakePhotoOptions['flash']) => void;
}

const FlashControl = ({ mode, flashHandler }: FlashControlProps) => {
  const onPress = useCallback(() => {
    const newMode = mode === 'on' ? 'off' : 'on';
    flashHandler(newMode);
  }, [mode]);

  const flashIcon = useMemo(() => {
    return mode === 'on' ? 'flash' : 'flash-off';
  }, [mode]);

  return { flashIcon, onPress };
};

export default FlashControl;
