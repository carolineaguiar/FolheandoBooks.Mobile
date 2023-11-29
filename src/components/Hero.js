import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Shop from '../screens/Shop';

const HeroSection = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#C963B6', '#FFFFFF']}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.hero}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.introExcerpt}>
                <Text style={styles.h1}>Seja Bem Vindo!</Text>
                <Text style={styles.h2}>A melhor seleção de Livros para você</Text>
                <Text style={styles.p}>Só aqui você encontra os melhores livros, com os melhores preços.</Text>
                <View style={styles.ctaButtons}>
                  <TouchableOpacity
                    style={styles.btnSecondary}
                    onPress={() => navigation.navigate('Shop')}
                  >
                    <Text style={styles.btnText}>Compre Agora</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnWhiteOutline} onPress={() => console.log('Folhear pressed')}>
                    <Text style={styles.btnText}>Folhear</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.heroImgWrap}>
                <Image source={require('../../assets/livro-capa.png')} style={styles.heroImg} />
                <View style={styles.dotsOverlay} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  hero: {
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  introExcerpt: {
    position: 'relative',
    zIndex: 4,
    maxWidth: 450, // Adjust as needed
  },
  h1: {
    fontWeight: '700',
    color: '#fff', // $white
    marginBottom: 30,
    fontSize: 24, // Adjust as needed
  },
  h2: {
    color: '#fff', // $white
    fontSize: 18, // Adjust as needed
  },
  p: {
    color: 'rgba(255, 255, 255, 0.5)', // rgba($white, .5)
    marginBottom: 30,
    fontSize: 14, // Adjust as needed
  },
  ctaButtons: {
    flexDirection: 'row',
  },
  btnSecondary: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'transparent', // Alterado para 'transparent'
    borderWidth: 2,
    borderColor: '#fff', // $secondary
  },
  btnWhiteOutline: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff', // $white
  },
  btnText: {
    color: '#fff', // $white
  },
  heroImgWrap: {
    position: 'relative',
  },
  heroImg: {
    position: 'relative',
    top: 0,
    right: 0,
    zIndex: 2,
    maxWidth: 780,
    left: -20,
  },
  dotsOverlay: {
    position: 'absolute',
    content: '',
    width: 255,
    height: 217,
    backgroundImage: 'url("../../assets/dots-light.svg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    right: -100,
    top: 0,
  },
});

export default HeroSection;
