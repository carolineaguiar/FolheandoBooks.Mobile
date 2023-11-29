import React, { useEffect, useState } from 'react';

const PopularProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Realize a requisição GET à API
    fetch("https://folheandobooksgateway.azurewebsites.net/api/v1/Product/all-products")
      .then(response => response.json())
      .then(data => {
        // Verifique se há produtos na resposta
        if (data && data.length > 0) {
          // Embaralhe a lista de produtos
          const shuffledProducts = shuffleArray(data);

          // Selecione os 4 primeiros produtos embaralhados
          const randomProducts = shuffledProducts.slice(0, 4);

          // Atualize o estado com os produtos aleatórios
          setRandomProducts(randomProducts);
        }
      })
      .catch(error => {
        console.error("Erro ao buscar produtos da API: " + error);
      });
  }, []);

  // Função para embaralhar um array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="popular-product">
      <div className="container">
        <div className="row">
          {randomProducts.map((product, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product.imageURL} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>
                    <a href="#">Ler Mais</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
