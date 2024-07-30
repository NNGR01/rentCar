// src/App.js
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Title from "./Title";
import Form from "./Form";
import ListForm from "./ListForm";

const App = () => {
  const view = useSelector((state) => state.view);

  return (
    <>
      <Navbar />
      {view === "form" ? (
        <>
          <Title />
          <Form />
        </>
      ) : (
        <ListForm />
      )}
    </>
  );
};

export default App;
