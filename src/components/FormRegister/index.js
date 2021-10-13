import React from 'react'
import {Container,
        FormContainer,
        Form,
        FormWrapper,
        RadioWrapper,
        Button,
        FormRadioLabel,
        FormRadio,
        FormH1} from './FormRegElements'
import {FormInput,
        FormLabel} from '../form'
import ImageSlider from '../../components/ImageSlider'
import { SliderData } from '../../components/ImageSlider/SliderData.js'


const FormRegister = (props) => {
    return (
        <>
            <Container>
                <ImageSlider slides={SliderData}/>
                <FormContainer>
                    <Form>
                        <FormH1>Cadastro {(props.title) == null ? "de Usuário" : props.title}</FormH1>
                        <FormWrapper>
                            <FormLabel for="name">Nome</FormLabel>
                            <FormInput id="name"name="name" type="text"/>

                            {props.lblCrp}
                            {props.crp}

                            {props.lblInstituicao}
                            {props.instituicao}

                            {props.lblCpf}
                            {props.cpf}

                            <FormLabel for="cell">Telefone</FormLabel>
                            <FormInput id="cell" name="cell" type="number"/>

                            <FormLabel for="email">Email</FormLabel>        
                            <FormInput id="email" name="email" type="email"/>

                            <FormLabel for="date">Data de Nascimento</FormLabel>        
                            <FormInput id="date" type="date" name="birth" />
                            
                            <FormLabel>Gênero</FormLabel>        
                            <RadioWrapper>
                                    <FormRadio type="radio" name="gender" id="male" value="male" />
                                    <FormRadioLabel for="male">Masculino</FormRadioLabel>

                                    <FormRadio type="radio" name="gender" id="female" value="female" />
                                    <FormRadioLabel for="female">Feminino</FormRadioLabel>

                                    <FormRadio type="radio" name="gender" id="others" value="others" />
                                    <FormRadioLabel for="others">Outros</FormRadioLabel>
                            </RadioWrapper>
                            
                            {props.time}

                            {props.terapeutica}
                            <FormLabel for="passwd">Senha</FormLabel>    

                            <FormInput id="passwd" name="passwd" type="password"/>

                            <Button className="submit btn" type="submit">
                                CONFIRMAR
                            </Button>
                        </FormWrapper>
                    </Form>
                </FormContainer>
            </Container>
        </>
    )
}

export default FormRegister
