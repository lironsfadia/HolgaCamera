import { View, Text, StyleSheet } from 'react-native';

export const FlippedContent = ({ text }) => {
  return (
    <View style={flippedContentStyles.card}>
      <Text style={flippedContentStyles.text}>{text}</Text>
    </View>
  );
};

const flippedContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#baeee5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    color: '#001a72',
  },
});
