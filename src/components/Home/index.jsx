import React, { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

/* Import Icons */
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

/* Import Images */

import imageCastingDJ from "../../public/img/dj1.jpg";
import imageCastingDJ2 from "../../public/img/dj2.jpg";
//Components
import Artist from "./components/Artist";

const Home = () => {
  return (
    <Backgorund>
      <BannerWithHover src={imageCastingDJ}></BannerWithHover>
      <Title>JINGA</Title>
      <TitleText>Curadoria artística musical.</TitleText>
      <br></br>
      <br></br>
      <Menu>
        <Link to={'/aniversarios'} style={{ textDecoration: 'none' }}><MenuOption>ANIVERSÁRIOS</MenuOption></Link>
        <Link to={'/corporativo'} style={{ textDecoration: 'none' }}><MenuOption>CORPORATIVO</MenuOption></Link>
        <Link to={'/debutante'} style={{ textDecoration: 'none' }}><MenuOption>15 ANOS</MenuOption></Link>
        <Link to={'/formaturas'} style={{ textDecoration: 'none' }}><MenuOption>FORMATURAS</MenuOption></Link>
        <Link to={'/casamentos'} style={{ textDecoration: 'none' }}><MenuOption>CASAMENTOS</MenuOption></Link>
      </Menu>
      <BannerWithHover src={imageCastingDJ}></BannerWithHover>
      <SectionTitle id="djs">DJ's</SectionTitle>
      <br></br>
      <br></br>

      <Artist
        image={"https://i.ibb.co/7WVmjVT/home-djs-samuel.jpg"}
        title={"SAMUEL ANTONIAZZI"}
        italicText={""}
        description={
          "Samuel Antoniazzi vem trazendo alegria e diversão para as pistas da Serra Gaúcha desde 2009, quando iniciou sua carreira em festas e eventos particulares. Com seu feeling musical único, ele mostra seu talento em sets que passam pelos grandes clássicos e também pelos hits contemporâneos. Em 2012, estudou na Academia Internacional de Música Eletrônica aprimorando suas técnicas de mixagem. O jovem profissional traz na bagagem centenas de festas realizadas entre casamentos, aniversários, formaturas e baladas, sendo presença garantida nas pistas dos melhores encontros sociais da região. Em 2016 lançou sua nova marca com o conceito making people dance que promete fazer todos dançarem, independente do estilo ou idade. No ano de 2017 agregou conhecimentos em Sydney, discotecando nas festas da cidade mais badalada da Austrália."
        }
        seeMoreText={"Ver mais ->"}
        link={"/samuel"}
      ></Artist>
      <br></br>
      <Artist
        image={"https://i.ibb.co/0XbbFR4/home-djs-tuy.jpg"}
        title={"ARKTT"}
        italicText={""}
        description={
          "Com apenas 16 anos, em 2015, Lucas Diniz iniciou sua carreira dentro do meio musical como DJ, tocando em diversos clubes, podendo ter  dividido palco com grandes nomes da cena nacional e também da serra gaúcha. Com um carinho especial pela música eletrônica, o jovem DJ recria seu nome artístico para ARKTT. Após isso sua trajetória como DJ já caminhou por diversos canais de comunicação como Rede Globo e Rádio Atlântida. Somando Mais De 100 Mil Acessos Nas Plataformas digitais em menos de um ano de projeto. Atualmente, agita as pistas mais badaladas da serra gaúcha com sua energia e versatilidade na discotecagem."
        }
        seeMoreText={"Ver mais ->"}
      ></Artist>
      <br></br>
      <Artist
        image={"https://i.ibb.co/BL7Mb0L/home-djs-arktt.png"}
        title={"TUY"}
        italicText={""}
        description={
          "Iniciou seus estudos musicais em 2017 e a partir daí sua paixão foi a discotecagem. Com o passar do tempo o jovem DJ  desenvolveu seu estilo próprio e sempre procura levar o melhor do reggaeton, funk, pop, eletrônica…tudo para deixar a pista vibrante. O DJ sempre se dedica fazendo pesquisas minuciosas para sempre entregar um set diferenciado. Além disso, sua apresentação conta com muita interação com opúblico e efeitos especiais. Seu primeiro single, nas plataformas digitais, hoje, já soma mais de 100.000 plays! Atualmente, estuda produção musical para aprimorar seus conhecimentos, habilidades e a performance."
        }
        seeMoreText={"Ver mais ->"}
      ></Artist>
      <br></br>
      <Artist
        image={"https://i.ibb.co/mF6TrqJ/home-djs-caio.jpg"}
        title={"CAIO CRUZ"}
        italicText={""}
        description={
          "Caio Cruz é DJ/Produtor há mais de 7 anos e foi influenciado pela música ainda criança, por meio da família que é composta por diversos músicos. Começou a tocar bateria com 8 anos de idade e com o passar do tempo explorou outras áreas da música, incluindo discotecagem. Cursou engenharia de áudio e produção musical fora do país. Atualmente aplica seus conhecimentos e técnicas nas mixagens e nas apresentações, conquistando o público."
        }
        seeMoreText={"Ver mais ->"}
      ></Artist>
      <br></br>
      <br></br>
      <TitleText>BANDAS</TitleText>
      <br></br>
      <br></br>
      <BannerWithHover src={imageCastingDJ2}></BannerWithHover>
      <br></br>
      <br></br>
      <SectionTitle>SOBRE NÓS</SectionTitle>
      <Text>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </Text>
      <br></br>
      <br></br>
      <SectionTitle>Contatos</SectionTitle>
      <DivFlex>
        <SectionStyle>
          <GrInstagram size={50}></GrInstagram>
          <BsWhatsapp size={50}></BsWhatsapp>
        </SectionStyle>
      </DivFlex>
      <BannerWithHover src={imageCastingDJ}></BannerWithHover>
    </Backgorund>
  );
};

//Styled Components

/* const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`; */
const translate = keyframes`
  from {
    transform: translateX(100px);
  }

  to {
    transform: transalateX(100px);
  }
  `;

const translateTitle = keyframes`
  from {
    transform: translateX(-100px);
  }

  to {
    transform: transalateX(100px);
  }
  `;

const translateMenuOption = keyframes`
  from {
    transform: translateX(100px);
  }

  to {
    transform: transalateX(-100px);
  }
  `;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 0 30px 0;
  column-gap: 10px;
  row-gap: 10px;

`;

const MenuOption = styled.a`
  background-color: #f2b92a;
  width: 44vw;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${translateMenuOption} 2s ease-in-out;
  @media (min-width: 780px) {
    width: 18vw;
  }
`;

const SectionStyle = styled.section`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const ImageCasting = styled.img`
  width: 94vw;
`;

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Backgorund = styled.div`
  background: #151515;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BannerWithHover = styled.img`
  width: 100vw;
  height: auto;
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 100%);
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  text-align: inherit;
  width: 80vw;
  position: relative;
  animation: ${translateTitle} 2s ease-in-out;
`;
const TitleText = styled.h2`
  color: white;
  text-align: center;
  width: 93vw;
  margin: 0;
  padding: 0;
`;

const Text = styled.h3`
  color: white;
  text-align: justify;
  width: 90vw;
`;

const SectionTitle = styled.div`
  font-size: 3rem;
  background-color: #f2b92a;
  width: 77vw;
  text-align: center;
  animation: ${translate} 2s ease-in-out;
`;

export default Home;
