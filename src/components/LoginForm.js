import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = () => {
  const login = () => {
    // Lógica de login aqui
    console.log('Login pressed');
  };

  return (
    <View style={styles.formSignin}>
      <Text style={styles.heading}>Faça o Login</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="name@example.com"
          keyboardType="email-address"
          autoCompleteType="email"
        />
        <Text style={styles.label}>E-mail</Text>
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCompleteType="password"
        />
        <Text style={styles.label}>Senha</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => console.log('Checkbox pressed')}>
          {/* You can replace this with a custom checkbox component */}
          <Text>Lembrar Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formSignin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  label: {
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    width: 300,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginForm;
