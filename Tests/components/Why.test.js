import React from 'react';

const Why = () => {
  return (
    <div className="why-choose-section" style={{ padding: '7rem 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="section-title">Por que folhear com a gente?</h2>
            <p>Só aqui você encontra a melhor seleção de livros, esperando para ser sua próxima leitura.</p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature" style={{ marginBottom: '30px' }}>
                  <div className="icon" style={{ display: 'inline-block', position: 'relative', marginBottom: '20px' }}>
                    <img src="images/truck.svg" alt="Frete Grátis" className="imf-fluid" />
                    <div
                      style={{
                        content: '""',
                        width: '33px',
                        height: '33px',
                        position: 'absolute',
                        background: 'rgba(59, 93, 80, 0.2)', // $primary
                        borderRadius: '50%',
                        bottom: '0',
                      }}
                    ></div>
                  </div>
                  <h3 style={{ fontSize: '14px', color: '#2f2f2f' }}>Rápido & Frete Grátis</h3>
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: '#6a6a6a' }}>
                    Só aqui você encontra frete grátis para todo o Brasil, sem pedido mínimo!
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature" style={{ marginBottom: '30px' }}>
                  <div className="icon" style={{ display: 'inline-block', position: 'relative', marginBottom: '20px' }}>
                    <img src="images/bag.svg" alt="Simplicidade na hora de comprar" className="imf-fluid" />
                    <div
                      style={{
                        content: '""',
                        width: '33px',
                        height: '33px',
                        position: 'absolute',
                        background: 'rgba(59, 93, 80, 0.2)', // $primary
                        borderRadius: '50%',
                        right: '-8px',
                        bottom: '0',
                      }}
                    ></div>
                  </div>
                  <h3 style={{ fontSize: '14px', color: '#2f2f2f' }}>Simplicidade na hora de comprar</h3>
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: '#6a6a6a' }}>
                    Com apenas alguns cliques seu pedido já estará sendo processado, separado e enviado para você.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature" style={{ marginBottom: '30px' }}>
                  <div className="icon" style={{ display: 'inline-block', position: 'relative', marginBottom: '20px' }}>
                    <img src="images/support.svg" alt="Suporte 24/7" className="imf-fluid" />
                    <div
                      style={{
                        content: '""',
                        width: '33px',
                        height: '33px',
                        position: 'absolute',
                        background: 'rgba(59, 93, 80, 0.2)', // $primary
                        borderRadius: '50%',
                        right: '-8px',
                        bottom: '0',
                      }}
                    ></div>
                  </div>
                  <h3 style={{ fontSize: '14px', color: '#2f2f2f' }}>Suporte 24/7</h3>
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: '#6a6a6a' }}>
                    Teve algum problema? Relaxa. Nossa equipe de suporte está sempre disponível pra falar com você.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature" style={{ marginBottom: '30px' }}>
                  <div className="icon" style={{ display: 'inline-block', position: 'relative', marginBottom: '20px' }}>
                    <img src="images/return.svg" alt="Reembolso sem complicações" className="imf-fluid" />
                    <div
                      style={{
                        content: '""',
                        width: '33px',
                        height: '33px',
                        position: 'absolute',
                        background: 'rgba(59, 93, 80, 0.2)', // $primary
                        borderRadius: '50%',
                        right: '-8px',
                        bottom: '0',
                      }}
                    ></div>
                  </div>
                  <h3 style={{ fontSize: '14px', color: '#2f2f2f' }}>Reembolso sem complicações</h3>
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: '#6a6a6a' }}>
                    Não conseguimos resolver seu problema? Tudo bem, nossa política de reembolso é simples e prática.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
