import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import ContactForm  from '../components/ContactForm';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <ContactForm />


      <Footer />
      {/* Restante do seu código aqui */}
    </View>
  );
};

export default HomeScreen;
