import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addData } from "./redux/formSlice";
import Button from "./components/Button";
import Divider from "./components/Divider";

const FormContainer = styled.nav`
  align-items: center;
  padding: 1rem;
`;

const InputContainer = styled.div`
  @media (min-width: 418px) {
    padding-left: 12rem;
    padding-right: 12rem;
  }
`;

const FormTitle = styled.div`
  display: flex;
  margin: 0;
  color: black;
  font-family: "Barlow", sans-serif;
  font-weight: 441;
  font-size: 1.8rem;
  margin-bottom: 1rem;

  @media (max-width: 418px) {
    margin-bottom: 0.7rem;
    font-weight: 441;
    font-size: 1.8rem;
  }
`;

const FormText = styled.div`
  display: flex;
  margin: 0;
  color: black;
  font-family: "Barlow", sans-serif;
  margin-bottom: 3rem;
  @media (max-width: 418px) {
    line-height: 1.3rem;
    font-size: 1.1rem;
    font-weight: 321;
    margin-bottom: 1.4rem;
    text-align: justify;
  }
`;

const InputTitle = styled.div`
  font-family: "Barlow", sans-serif;
  font-weight: 481;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  @media (min-width: 418px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  flex: ${({ index }) => (index === 0 ? "0 0 60%" : "0 0 30%")};
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  border: 0.13rem solid #002eff;
  border-radius: 0.4rem;
  height: 2.6rem;
  &::placeholder {
    color: #002eff;
    padding-left: 0.7rem;
  }
  @media (max-width: 418px) {
    font-size: 1rem;
  }
`;

const Select = styled.select`
  width: 100%;
  margin-bottom: 1rem;
  border: 0.13rem solid #002eff;
  border-radius: 0.4rem;
  height: 2.6rem;
  color: #002eff;
  padding: 0 2.5rem 0 1.1rem;
  @media (max-width: 418px) {
    font-size: 1rem;
  }
`;

const validatePatente = (patente) => {
  const validFormatRegex = /^([A-Z]{4}[0-9]{2}|[A-Z]{2}[0-9]{4})$/;
  return validFormatRegex.test(patente);
};

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombre: "",
    rut: "",
    patente: "",
    marca: "",
    modelo: "",
    precio: "",
    color: "",
  });

  const [modelos, setModelos] = useState([]);
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === "patente" ? value.toUpperCase() : value;

    if (name === "marca") {
      let nuevosModelos = [];
      if (newValue === "chevrolet") {
        nuevosModelos = ["Camaro", "Malibu"];
      } else if (newValue === "kia") {
        nuevosModelos = ["Sportage", "Rio"];
      } else if (newValue === "nissan") {
        nuevosModelos = ["Altima", "Rogue"];
      } else if (newValue === "suzuki") {
        nuevosModelos = ["Swift", "Vitara"];
      } else if (newValue === "peugeot") {
        nuevosModelos = ["208", "3008"];
      } else {
        nuevosModelos = [];
      }
      setModelos(nuevosModelos);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, rut, patente, marca, modelo, precio, color } = formData;

    if (
      [nombre, rut, patente, marca, modelo, precio, color].some(
        (field) => field === ""
      )
    ) {
      const errorMsg = "Por favor, llena todos los campos.";
      setValidationError(errorMsg);
      alert(errorMsg);
      return;
    }

    if (!validatePatente(patente)) {
      const errorMsg = "Formato de patente inválido. Debe ser AAAA00 o AA0000.";
      setValidationError(errorMsg);
      alert(errorMsg);
      return;
    }

    dispatch(addData(formData));
    setFormData({
      nombre: "",
      rut: "",
      patente: "",
      marca: "",
      modelo: "",
      precio: "",
      color: "",
    });
    setValidationError("");
    alert("Formulario enviado con éxito.");
  };

  return (
    <FormContainer>
      <InputContainer>
        <FormTitle>Nuevo formulario</FormTitle>
        <FormText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry's standard dummy text
          ever since.
        </FormText>

        <InputTitle>Datos del vendedor:</InputTitle>
        <InputGroup>
          <InputWrapper index={0}>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper index={1}>
            <Input
              type="text"
              name="rut"
              placeholder="Rut Vendedor"
              value={formData.rut}
              onChange={handleChange}
            />
          </InputWrapper>
        </InputGroup>

        <Divider />

        <InputTitle>Datos del vehículo:</InputTitle>
        <InputGroup>
          <InputWrapper index={2}>
            <Input
              type="text"
              name="patente"
              placeholder="Patente del vehículo"
              value={formData.patente}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper index={3}>
            <Select name="marca" value={formData.marca} onChange={handleChange}>
              <option value="">Marca vehículo</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="kia">Kia</option>
              <option value="nissan">Nissan</option>
              <option value="suzuki">Suzuki</option>
              <option value="peugeot">Peugeot</option>
            </Select>
          </InputWrapper>
          <InputWrapper index={4}>
            <Select
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
            >
              <option value="">Modelo vehículo</option>
              {modelos.map((modelo, index) => (
                <option key={index} value={modelo}>
                  {modelo}
                </option>
              ))}
            </Select>
          </InputWrapper>
          <InputWrapper index={5}>
            <Input
              type="text"
              name="precio"
              placeholder="Precio del vehículo"
              value={formData.precio}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper index={6}>
            <Input
              type="text"
              name="color"
              placeholder="Color del vehículo"
              value={formData.color}
              onChange={handleChange}
            />
          </InputWrapper>
        </InputGroup>
        <Divider />

        <Button onClick={handleSubmit}>Enviar</Button>
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
