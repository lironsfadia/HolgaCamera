import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  runOnJS,
  useSharedValue,
} from 'react-native-reanimated';

export const FlipCard = ({
  isFlipped,
  cardStyle,
  direction = 'x',
  duration = 500,
  RegularContent,
  FlippedContent,
  onFlipComplete,
}) => {
  const isDirectionX = direction === 'x';
  const animationProgress = useSharedValue(0);

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(animationProgress.value, [0, 1], [0, 180]);

    return {
      transform: [
        isDirectionX
          ? { rotateX: `${spinValue}deg` }
          : { rotateY: `${spinValue}deg` },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(animationProgress.value, [0, 1], [180, 360]);

    return {
      transform: [
        isDirectionX
          ? { rotateX: `${spinValue}deg` }
          : { rotateY: `${spinValue}deg` },
      ],
    };
  });

  animationProgress.value = withTiming(
    isFlipped.value ? 1 : 0,
    { duration },
    (finished) => {
      if (finished) {
        runOnJS(onFlipComplete)(true);
      }
    }
  );

  return (
    <View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          cardStyle,
          regularCardAnimatedStyle,
        ]}
      >
        {RegularContent}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          cardStyle,
          flippedCardAnimatedStyle,
        ]}
      >
        {FlippedContent}
      </Animated.View>
    </View>
  );
};

const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: 'absolute',
    zIndex: 1,
  },
  flippedCard: {
    backfaceVisibility: 'hidden',
    zIndex: 2,
  },
});
