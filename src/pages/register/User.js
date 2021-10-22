import React, {useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Mind from "../../assets/img/Mind.svg";
import { ImgLogo } from "../../components/NavBar/NavBarElements";
import FormRegister from "../../components/FormRegister";
import axios from "axios";

const RegisterUser = () => {

  const [dados, setDados] = useState({
    nome: "",
    rm:null,
    nomeInstituicao:null,
    cpf:null,
    telefone: "",
    email: "",
    dataNascimento: "",
    genero: "",
    tempoConversa:null,
    linhaTerapeutica:null,
    senha: "",
    crp:null
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new Date(dados.dataNascimento);

    let dataFormatada = data.toLocaleDateString("pt-BR", {timeZone:"UTC"})

    dados.dataNascimento = dataFormatada;

    axios
      .post("/cadastro", dados)
      .then(() => {
        window.location="/"
      })
      .catch((e) => {
        console.log(e);
        console.log(dados)
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
