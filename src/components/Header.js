import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const handleInicioPress = () => {
    // Navegar para a tela HomeScreen quando Início for pressionado
    navigation.navigate('Home');
  };

  const handleLivrosPress = () => {
    // Navegar para a tela Shop quando Livros for pressionado
    navigation.navigate('Shop');
  };

  const handleContatoPress = () => {
    // Navegar para a tela Why quando Contato for pressionado
    navigation.navigate('Why');
  };

  const handleLoginPress = () => {
    // Lógica para navegar para a tela de login
    console.log('Login pressed');
  };

  const handleCartPress = () => {
    // Lógica para navegar para a tela de carrinho
    console.log('Cart pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={handleInicioPress}>
          <Text style={styles.navLink}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleLivrosPress}>
          <Text style={styles.navLink}>Livros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleContatoPress}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.ctaItem} onPress={handleLoginPress}>
          <Image source={require('../../assets/user.svg')} style={styles.ctaIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctaItem} onPress={handleCartPress}>
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
