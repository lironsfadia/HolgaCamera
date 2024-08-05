import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CustomizableButtonType = {
  text: string;
  styles: any;
  onPress: () => void;
  disabled: boolean;
};

const CustomizableButton = ({
  text,
  styles,
  onPress,
  disabled,
}: CustomizableButtonType) => {
  return (
    <Pressable
      style={[styles, disabled ? styles.disabledButton : styles.enabledButton]}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

export default CustomizableButton;

const styles = StyleSheet.create({
  enabledButton: {
    backgroundColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});
