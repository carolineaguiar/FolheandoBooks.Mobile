import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import LoginForm  from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <View>
      <Header />
      <LoginForm />


      <Footer />
      {/* Restante do seu código aqui */}
    </View>
  );
};

export default Login;
