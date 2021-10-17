import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/Mind.svg"
import Escolha from "../../assets/img/escolha.svg";
import EscolhaDark from "../../assets/img/escolhaDark.svg";
import {Modal} from '../Modal'
import {
  Container,
  FormWrapper,
  FormContent,
  FormLabel,
  FormInput,
  ButtonContainer,
  Button,
  ImgLogo,
  Linker,
} from './FormLoginElements'

import{
  ModalH2,
  ModalImg,
  ModalButton,
} from '../Modal/ModalElements'


const FormLogin = (props) => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupVoluntary, setButtonPopupVoluntary] = useState(false);
    return (
        <Container>
            <FormWrapper>
                <FormContent>
                    <ImgLogo src={Logo}/>
                    <FormLabel for='email'>Email</FormLabel>
                    <FormInput id='email' type='email' name="email" value={props.vlEmail} onChange={props.onChangeEmail}required/>

                    <FormLabel for='password'>Senha</FormLabel>
                    <FormInput id='password' type='password' name="senha" value={props.vlSenha} onChange={props.onChangePassword} required/>

                    <ButtonContainer> 
                        <Button href="#" onClick={() => setButtonPopup(true)}>
                        Cadastrar
                        </Button>

                        <Linker>
                          <Link to={props.login} onClick={props.click} >
                            Login
                          </Link>
                        </Linker>
                    </ButtonContainer>
                </FormContent>
            </FormWrapper>

              <Modal trigger={buttonPopup} setTrigger={() => setButtonPopup(false)}>
                  <ModalH2>Escolha o tipo de usuário</ModalH2>
                  <ModalImg src={Escolha} alt="Avatar" />
              
                    <ModalButton onClick={() => setButtonPopupVoluntary(true)}>
                      Voluntário
                    </ModalButton>
                    <ModalButton href="./registerUser" id="btnUser">
                      Usuário
                    </ModalButton>
              </Modal>

              <Modal trigger={buttonPopupVoluntary} setTrigger={() => setButtonPopupVoluntary(false)}>
                  <ModalH2>Escolha o tipo de voluntário</ModalH2>
                  <ModalImg src={EscolhaDark} alt="Avatar"/>
                  <ModalButton href="./registerGraduated">
                    Formado
                  </ModalButton>
                  <ModalButton href="./registerIntern">
                    Estagiário
                  </ModalButton>
              </Modal>

        </Container>
    )
}

export default FormLogin
