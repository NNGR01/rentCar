import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FiTrash2 } from "react-icons/fi";
import { removeData } from './redux/formSlice';


const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Barlow", sans-serif;
  padding-left: 12rem;
  padding-right: 12rem;
`;

const Title = styled.h1`
  margin-top: 2rem;
  color: black;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
`;

const HeaderRow = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  width: 100%;
  position: relative;
`;

const HeaderItem = styled.div`
  font-weight: 480;
  color: black;
  text-align: center;
  padding: 0.5rem;
`;

const DividerList = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ccc;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
  height : 3rem;
`;

const DataItem = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const TrashIcon = styled(FiTrash2)`
  color: #002eff; 
  cursor: pointer;
  &:hover {
    color: #001bbf;
  }
`;

const ListForm = () => {
    const data = useSelector((state) => state.form.data);
    const dispatch = useDispatch();
  
    const handleRemove = (index) => {
      dispatch(removeData(index));
    };
  
    return (
      <ListContainer>
        <Title>Lista formulario</Title>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry's standard dummy text
          ever since.
        </p>
  
        <HeaderRow>
          <HeaderItem>Nombre</HeaderItem>
          <HeaderItem>Rut vendedor</HeaderItem>
          <HeaderItem>Patente vehículo</HeaderItem>
          <HeaderItem>Marca vehículo</HeaderItem>
          <HeaderItem>Modelo vehículo</HeaderItem>
          <HeaderItem>Color vehículo</HeaderItem>
          <HeaderItem>Eliminar</HeaderItem>
          <DividerList />
        </HeaderRow>
  
        {data.map((item, index) => (
          <Row key={index}>
            <DataItem>{item.nombre}</DataItem>
            <DataItem>{item.rut}</DataItem>
            <DataItem>{item.patente}</DataItem>
            <DataItem>{item.marca}</DataItem>
            <DataItem>{item.modelo}</DataItem>
            <DataItem>{item.color}</DataItem>
            <DataItem>
              <TrashIcon onClick={() => handleRemove(index)} />
            </DataItem>
          </Row>
        ))}
      </ListContainer>
    );
  };
  
  export default ListForm;