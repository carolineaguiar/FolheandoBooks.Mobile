import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Why from '../components/Why';
import PopularProducts from '../components/PopularProducts';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Hero />
      <Why />


      <Footer />
      {/* Restante do seu código aqui */}
    </View>
  );
};

export default HomeScreen;
