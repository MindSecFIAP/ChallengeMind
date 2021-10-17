import React, {useState } from "react";
import NavBar from "../../components/NavBar";
import Mind from "../../assets/img/Mind.svg";
import { ImgLogo } from "../../components/NavBar/NavBarElements";
import FormRegister from "../../components/FormRegister";
import { FormLabel, FormInput } from "../../components/global/form";
import {
  RadioWrapper,
  FormRadio,
  FormRadioLabel,
  SelectWrapper,
  FormSelect,
  SelectOption,
} from "../../components/FormRegister/FormRegElements";
import axios from "axios";

const RegisterIntern = () => {    
    const [dados, setDados] = useState({
        nome: "",
        rm:"",
        nomeInstituicao:"",
        cpf:"",
        telefone: "",
        email: "",
        dataNascimento: "",
        genero: "",
        tempoConversa:"",
        linhaTerapeutica:"",
        senha: "",
    })

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/cadastro", dados)
    
          .then((res) => {
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
        img={<ImgLogo class="logo" src={Mind} alt="Logo Mind" />}
      />
      <FormRegister
        title="de Estagiário"
        lblRm={<FormLabel for="rm">Registro de Matrícula</FormLabel>}
        rm={<FormInput id="rm" name="rm" type="number" value={dados.rm} onChange={handleChange}/>}
        lblInstitution={
          <FormLabel for="institution">Nome da Instituição de Ensino</FormLabel>
        }
        institution={
          <FormInput id="institution" name="nomeInstituicao" type="text" value={dados.nomeInstituicao} onChange={handleChange} />
        }
        lblCpf={<FormLabel for="cpf">CPF (Somente Números)</FormLabel>}
        cpf={<FormInput id="cpf" name="cpf" type="number" value={dados.cpf} onChange={handleChange} />}
        lblTime={<FormLabel>Tempo de conversa</FormLabel>}
        time={
          <RadioWrapper onChange={handleChange}>
            <FormRadio type="radio" name="tempoConversa" id="thirty" value="30" />
            <FormRadioLabel for="thirty">Conversa de 30min</FormRadioLabel>

            <FormRadio type="radio" name="tempoConversa" id="fourtyfive" value="45" />
            <FormRadioLabel for="fourtyfive">Conversa de 45min</FormRadioLabel>

            <FormRadio type="radio" name="tempoConversa" id="sixty" value="60" />
            <FormRadioLabel for="sixty">Conversa de 60min</FormRadioLabel>
          </RadioWrapper>
        }
        terapeutica={
          <SelectWrapper>
            <FormLabel for="types">Linha terapêutica</FormLabel>
            <FormSelect name="linhaTerapeutica" id="types" onChange={handleChange}>
              <SelectOption value="" disabled selected>
                Selecione
              </SelectOption>

              <SelectOption value="type_psica">Psicanálise</SelectOption>

              <SelectOption value="type_jung">Junguiana</SelectOption>

              <SelectOption value="type_tcc">TCC</SelectOption>

              <SelectOption value="type_behav">Behaviorismo</SelectOption>

              <SelectOption value="type_gesta">Gestalt-terapia</SelectOption>

              <SelectOption value="type_human">Humanista</SelectOption>
            </FormSelect>
          </SelectWrapper>
        }
        submit={handleSubmit}
        onChangeName={handleChange} vlName={dados.nome}
        onChangeCell={handleChange} vlCell={dados.telefone}
        onChangeEmail={handleChange} vlEmail={dados.email}
        onChangeNascimento={handleChange} vlDate={dados.dataNascimento}
        onChangeGender={handleChange} 
        onChangePassword={handleChange} vlPassword={dados.senha}
      />
    </>
  );
};

export default RegisterIntern;
