import React, {useState} from 'react'
import Logo from "../../assets/img/Mind.svg"
import {Container,
        FormWrapper,
        FormContent,
        FormLabel,
        FormInput,
        ButtonContainer,
        Button,
        ImgLogo,
        ModalWrapper} from './FormLoginElements'

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
                        <Button className="btn" href="#" onClick={() => setButtonPopup(true)}>
                        Cadastrar
                        </Button>

                        <Button type="button" className="btn" onclick="check(this.form)" value="Login">
                        Login
                        </Button>
                    </ButtonContainer>
                </FormContent>
            </FormWrapper>
        </Container>
    )
}

export default FormLogin
