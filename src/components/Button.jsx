import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.5rem 2rem;
  font-family: "Barlow", sans-serif;
  font-size: 1rem;
  color: white;
  background-color: #002eff;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  width: 56%;

  @media (min-width: 418px) {
    margin: 2rem 0 0 auto;
    width: auto;
  }

  &:hover {
    background-color: #001bbf;
  }
`;

const Button = ({ onClick, children }) => (
  <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
);

export default Button;
