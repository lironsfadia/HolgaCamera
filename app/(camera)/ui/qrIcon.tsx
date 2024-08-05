import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';

const QrIcon = ({ onPress }) => {
  return (
    <View style={styles}>
      <Ionicons
        name={'qr-code-sharp'}
        size={24}
        color="white"
        onPress={onPress}
      />
    </View>
  );
};

export default QrIcon;

const styles = StyleSheet.create({});
