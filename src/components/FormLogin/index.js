import React, {useState} from 'react'
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
} from './FormLoginElements'

import{
  ModalH2,
  ModalImg,
  ModalButton,
} from '../Modal/ModalElements'

const FormLogin = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupVoluntary, setButtonPopupVoluntary] = useState(false);
    return (
        <Container>
            <FormWrapper>
                <FormContent>
                    <ImgLogo src={Logo}/>
                    <FormLabel for='email'>Email</FormLabel>
                    <FormInput id='email' type='email' name="email" required/>

                    <FormLabel for='password'>Senha</FormLabel>
                    <FormInput id='password' type='password' name="password" required/>

                    <ButtonContainer> 
                        <Button href="#" onClick={() => setButtonPopup(true)}>
                        Cadastrar
                        </Button>

                        <Button type="button" onclick="check(this.form)" value="Login">
                        Login
                        </Button>
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
                  <ModalButton href="./registerFormado">
                    Formado
                  </ModalButton>
                  <ModalButton href="./registerEstagiario">
                    Estagiário
                  </ModalButton>
              </Modal>

        </Container>
    )
}

export default FormLogin
