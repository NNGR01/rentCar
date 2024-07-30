// src/Navbar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setView } from './redux/viewSlice';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px;
  box-shadow: 0 4px 2px -2px #d3d3d3;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (min-width: 418px) {
    margin-right: 4rem;
  }
`;

const NavItem = styled.a`
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  color: #002eff;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background-color: skyblue;
  }

  @media (max-width: 418px) {
    color: black;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <NavbarContainer>
      <NavItems>
        <NavItem
          onClick={() => dispatch(setView('form'))}
        >
          Formulario
        </NavItem>
        <NavItem
          onClick={() => dispatch(setView('list'))}
        >
          Lista Formulario
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
