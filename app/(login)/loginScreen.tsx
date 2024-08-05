import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Image } from 'react-native-svg';
import { Stack } from 'expo-router';

const LoginScreen = () => {
  const { width, height } = Dimensions.get('window');
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Svg width={width} height={height}>
        <Image source={require('../../assets/images/login-bg.jpg')} />
      </Svg>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
