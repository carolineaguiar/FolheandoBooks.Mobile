import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header'; // Importando o componente Header
import Footer from '../components/Footer'; // Importando o componente Footer

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('https://folheandobooksgateway.azurewebsites.net/api/v1/Product/all-products');
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Header />

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.container}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Livros</Text>
          </View>
        </View>
      </View>

      {/* Lista de Produtos */}
      <ScrollView style={styles.productList}>
        {products.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.imageURL }} style={styles.productThumbnail} />
            <Text style={styles.productTitle}>{product.name}</Text>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Rodapé */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos conforme mencionado anteriormente
});

export default Shop;
