import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    handlePress();
  }, []);

  function handlePress() {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log('Press');
    setNumber(randomNumber);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Gerar Numero</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#271b5e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  number: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#a0a0a0',
    width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 999,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default App;
