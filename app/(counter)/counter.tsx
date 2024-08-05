import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { ActionButton } from './actionButton';
import { FlipCard } from './flipCard';
import { FlippedContent } from './flippedContent';
import { RegularContent } from './regularContent';

const Counter = () => {
  const isFlipped = useSharedValue(false);
  const [counter, setCounter] = useState(0);
  const [pendingOperation, setPendingOperation] = useState(null);
  const aba = useMemo(() => {
    return Math.floor(counter / 10);
  }, [counter]);

  const handleFlipComplete = useCallback(() => {
    if (pendingOperation === 'increment') {
      console.log('increment');
      setCounter(counter + 1);
    } else if (pendingOperation === 'decrement') {
      setCounter(counter - 1);
    }
    setPendingOperation(null);
  }, [pendingOperation, counter]);

  const handleIncrementPress = useCallback(() => {
    handleButtonPress('increment');
  }, []);

  const handleDecrementPress = useCallback(() => {
    handleButtonPress('decrement');
  }, []);

  const handleButtonPress = (operation) => {
    isFlipped.value = !isFlipped.value;
    setPendingOperation(operation);
  };

  const regularContent = <RegularContent text={counter} />;
  const flippedContent = <FlippedContent text={counter} />;

  const regularTenContent = <RegularContent text={aba} />;
  const flippedTenContent = <FlippedContent text={aba} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flipCardContainer}>
        <FlipCard
          isFlipped={aba > 0}
          cardStyle={styles.flipCard}
          onFlipComplete={() => {}}
          RegularContent={regularTenContent}
          FlippedContent={flippedTenContent}
        />
        <FlipCard
          isFlipped={isFlipped}
          cardStyle={styles.flipCard}
          onFlipComplete={handleFlipComplete}
          RegularContent={regularContent}
          FlippedContent={flippedContent}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ActionButton
          handlePress={handleIncrementPress}
          title="Increment"
          textStyles={styles.toggleButtonText}
          buttonStyles={styles.toggleButton}
        />
        <ActionButton
          handlePress={handleDecrementPress}
          title="Decrement"
          textStyles={styles.toggleButtonText}
          buttonStyles={styles.toggleButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  toggleButton: {
    backgroundColor: '#b58df1',
    padding: 12,
    borderRadius: 48,
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  flipCard: {
    width: 170,
    height: 200,
  },
  flipCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
