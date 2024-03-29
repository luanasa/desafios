import './hero.css';
import ScrollReveal from 'scrollreveal'; 
import React, { useEffect } from 'react';

function Hero() {

  useEffect(() => {
    ScrollReveal().reveal('.info-price', {
      delay: 300, 
      distance: '50px', 
      origin: 'right', 
      duration: 1000, 
      easing: 'ease-in-out', 
      reset: true 
    });
  }, []); 
  return (
    <div className="hero_container">
      <div className="hero-text">
      <div className="avatars">
        <img src="./avatars.png" alt="" />
        <span>Junte-se a +10.000 alunos</span>
      </div>
      <div className="group-text">
        <h1>Comece a estudar <span>frontend</span> do zero com uma linguagem simples</h1>
        <p>Trabalhe de casa, usando as tecnologias mais requisitados do mercado frontend.</p>
      </div>
      </div>
      
      <div className="info-price">
        <div className="header">
          <span>90% OFF</span>
          <p>Por tempo limitado</p>
        </div>
        <div className="price">
          <span>De R$ 100,00 por</span>
          <p>R$ 10,00</p>
        </div>
        <div className="footer">
          <button>QUERO COMPRAR AGORA</button>
          <p>Cartão de crédito, Boleto à vista, PayPal e Pix</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
