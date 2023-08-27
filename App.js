import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1-100');
  const [numGuesses, setNumGuesses] = useState(0);


  const makeGuess = () => {
    const userGuess = parseInt(guess, 10);
    
    if (isNaN(userGuess)) {
      Alert.alert('Please enter a valid number.');
    }else{
      setNumGuesses(numGuesses + 1);
    if(userGuess<secretNumber){
      Alert.alert('Your guess is too low.');
    } else if (userGuess > secretNumber) {
      Alert.alert('Your guess is too high.');
    } else {
      Alert.alert(`You guessed the number in ${numGuesses} guesses.`);
    }
  }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setGuess(text)}
        value={guess}
        keyboardType="numeric"
      />
      <Button title="Make Guess" onPress={makeGuess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 100,
    borderBottomWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
});
