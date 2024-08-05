import { Pressable, Text } from 'react-native';

export const ActionButton = (props) => {
  const { handlePress, title, textStyles, buttonStyles } = props;
  return (
    <Pressable style={buttonStyles} onPress={handlePress}>
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  );
};
