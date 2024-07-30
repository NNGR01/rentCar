import React from "react";
import styled from "styled-components";
import imageLaptop from "./assets/Laptop.png"; 

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const Image = styled.img`
  width: 424px;
  height: 424px;

  @media (max-width: 418px) {
    width: 230px;
    height: 230px;
  }
`;

const Heading = styled.h1`
  margin: 0;
  color: #002EFF;
  font-family: 'Barlow', sans-serif;
  font-weight: 300;

  @media (max-width: 418px) {
    font-size: 1.4rem;
  }
`;


const BoldText = styled.span`
  font-weight: 700; 
`;

const Title = () => {
  return (
    <TitleContainer>
      <Heading>
        Formulario <BoldText>de Prueba</BoldText>
      </Heading>
      <Image src={imageLaptop} alt="Descripción de la imagen" />
    </TitleContainer>
  );
};

export default Title;
