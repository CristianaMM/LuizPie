import React from "react";
import { Col, Row } from "react-flexbox-grid";
import album from "../assets/imgs/cd.png";
import appleMusic from "../assets/imgs/applemusic_b.png";
import spotify from "../assets/imgs/spotify_b.png";

export default function Album() {
  return (
    <div id="album" className="greyDiv">
      <div className="greyDivSpace">
        <Row>
          <Col xs={12}>
            <h4>Memória Afetiva</h4>
          </Col>
          <Col xs={12}>
            <p>
              É o álbum de estreia de Luiz Pié e conta com participação especial
              de Milton Nascimento e inédita de Roberto Menescal e Paulinho
              Mendonça.
            </p>
          </Col>
        </Row>
        <Row middle="xs" center="xs" start="md">
          <Col xs={9} md={5}>
            <img className="albumImg" src={album} alt="Memória afetiva Album" />
          </Col>
          <Col xs={9} md={7}>
            <Row start="xs" className="acessar">
              <Col xs={12}>
                <Row middle="xs">
                  <Col mdOffset={1} xs={4} md={2}>
                    <img
                      className="iconImg"
                      src={appleMusic}
                      alt="Apple Music Icon"
                    />
                  </Col>
                  <Col xs={8} md={9}>
                    <a
                      href="https://music.apple.com/us/album/mem%C3%B3ria-afetiva/1025103452"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acessar no Apple Music
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row middle="xs">
                  <Col mdOffset={1} xs={4} md={2}>
                    <img className="iconImg" src={spotify} alt="Spotify Icon" />
                  </Col>
                  <Col xs={8} md={9}>
                    <a
                      href="https://open.spotify.com/album/2Iooe4YVKvrTHkpasUALai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acessar no Spotify
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <p>
            Esse álbum é o resultado de uma história de força, perseverança,
            superação pessoal, e de um profundo amor à música. Com 12 canções
            sob arranjos e regência do próprio Menescal, o CD passeia por
            clássicos da Bossa Nova que atravessam gerações e que estão,
            justamente, na memória afetiva de muita gente. “Sabe Você” (Carlos
            Lyra e Vinicius de Moraes), “O Bem e o Mal” (Danilo Caymmi / Dudu
            Falcão), “Fim de Caso” (Dolores Duran), “Último Desejo” (Noel Rosa),
            “Ciúmes” (Carlos Lyra), “Tristeza” (Niltinho / Haroldo Lobo), “A
            Volta” (Menescal /Bôscoli), “Dorme Profundo” (Marcos Valle /
            Pigarrilho), “Abajur Lilás” (Rosa Passos / Ivan Lins / Fernando de
            Oliveira), e “Manhã de Carnaval” (Luiz Bonfá / Antonio Maria)
            completam o repertório de um trabalho que representa uma entrega
            total e irrestrita a um sonho.
          </p>
        </Row>
      </div>
    </div>
  );
}
