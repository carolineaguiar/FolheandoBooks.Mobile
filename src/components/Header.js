import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Início pressed')}>
          <Text style={styles.navLink}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Livros pressed')}>
          <Text style={styles.navLink}>Livros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Contato pressed')}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.ctaItem} onPress={() => console.log('Login pressed')}>
          <Image source={require('../../assets/user.svg')} style={styles.ctaIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctaItem} onPress={() => console.log('Cart pressed')}>
          <Image source={require('../../assets/cart.svg')} style={styles.ctaIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Fundo branco
    padding: 10,
  },
  logoContainer: {
    backgroundColor: '#fff', // Fundo branco
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    height: 60, // Ajuste a altura conforme necessário
    width: 200, // Ajuste a largura conforme necessário
  },
  navbar: {
    flexDirection: 'row',
    marginLeft: 'auto', // Move os itens para a direita
  },
  navItem: {
    marginHorizontal: 10,
  },
  navLink: {
    color: '#666', // Fonte cinza
    fontSize: 18, // Ajuste o tamanho da fonte conforme necessário
  },
  ctaContainer: {
    flexDirection: 'row',
  },
  ctaItem: {
    marginLeft: 10,
  },
  ctaIcon: {
    height: 20,
    width: 20,
  },
});

export default Header;
