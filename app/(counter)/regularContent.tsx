import { Text, View, StyleSheet } from 'react-native';

export const RegularContent = ({ text }) => {
  return (
    <View style={regularContentStyles.card}>
      <Text style={regularContentStyles.text}>{text}</Text>
    </View>
  );
};

const regularContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#b6cff7',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    color: '#001a72',
  },
});
