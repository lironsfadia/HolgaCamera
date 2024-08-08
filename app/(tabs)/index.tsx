import React from 'react';
import { Text, Button, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomizableButton from '../../ui/CustomizableButton';

const description = `
# Holga Camera App
Capture the essence of lo-fi photography with our Holga Camera App`;

const Home = () => {
  return (
    <SafeAreaView edges={['bottom', 'top']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Home' }} />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 8,
          }}
        >
          Holga Camera App
        </Text>
        <CustomizableButton
          text={'hey'}
          styles={[
            {
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
            },
          ]}
          disabled={false}
          onPress={() => {}}
        />
      </View>
      <Link href="/feed" asChild>
        <Button title="Go to feed" />
      </Link>
      <Link href="/loginScreen" asChild>
        <Button title="Go to Login" />
      </Link>
      <Link href="/counter" asChild>
        <Button title="Go to Counter" />
      </Link>
      <Link href="/camera" asChild>
        <Button title="Go to Camera" />
      </Link>
    </SafeAreaView>
  );
};

export default Home;
