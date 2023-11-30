import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import CartForm  from '../components/CartForm';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <View>
      <Header />
      <CartForm />


      <Footer />
      {/* Restante do seu código aqui */}
    </View>
  );
};

export default Cart;