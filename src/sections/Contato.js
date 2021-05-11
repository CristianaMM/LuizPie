import React from "react";

export default function Contato() {
  return (
    <div id="contato">
      <div className="whiteDivSpace">
        <h4>Contato</h4>
        <div className="contactForm">
          <p>
            <strong>Contato para shows</strong>
          </p>
          <a href="mailto:luizpiecontato@gmail.com">
            <p>luizpiecontato@gmail.com</p>
          </a>
        </div>
        <div className="contactForm">
          <p>
            <strong>Contato show internacional</strong>
          </p>
          <a href="mailto:Miyako.luizpie@gmail.com">
            <p>Miyako.luizpie@gmail.com</p>
          </a>
        </div>
        <div className="contactForm">
          <p>
            <strong>Contato Imprensa </strong>
          </p>
          <p>Mattoso Vinicius Produções Artísticas</p>
          <a href="tel:+55 2125231553">
            <p>+55 (21) 2523.1553</p>
          </a>
          <a href="mailto:mattosovinicius@mattosovinicius.com.br">
            <p>mattosovinicius@mattosovinicius.com.br</p>
          </a>
        </div>
      </div>
    </div>
  );
}
