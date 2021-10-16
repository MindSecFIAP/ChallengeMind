import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Mind from "../../assets/img/Mind.svg";
import { ImgLogo } from "../../components/NavBar/NavBarElements";
import FormRegister from "../../components/FormRegister";
import axios from "axios";

const RegisterUser = () => {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    email: "",
    dataNascimento: "",
    genero: "",
    senha: "",
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/cadastro", dados)

      .then(() => {
        window.location="/"
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <NavBar
        return="/"
        img={<ImgLogo className="logo" src={Mind} alt="Logo Mind" />}
      />
      <FormRegister
        submit={handleSubmit}
        onChangeName={handleChange}
        vlName={dados.nome}
        onChangeCell={handleChange}
        vlCell={dados.telefone}
        onChangeEmail={handleChange}
        vlEmail={dados.email}
        onChangeNascimento={handleChange}
        vlDate={dados.dataNascimento}
        onChangeGender={handleChange}
        onChangePassword={handleChange}
        vlPassword={dados.senha}
      />
    </>
  );
};

export default RegisterUser;
