import React from 'react'
import {Container,
        FormContainer,
        Form,
        FormWrapper,
        RadioWrapper,
        Button,
        FormRadioLabel,
        FormRadio
} from './FormRegElements'
import {FormInput, FormLabel} from '../form'
import ImageSlider from '../../components/ImageSlider'
import { SliderData } from '../../components/ImageSlider/SliderData.js'
const FormRegister = (props) => {
    return (
        <>
            <Container>
                <ImageSlider slides={SliderData}/>
                <FormContainer>
                    <Form>
                        <FormWrapper>
                            <FormLabel for="name">Nome</FormLabel>
                            <FormInput id="name"name="name" type="text"/>
                            {props.crp}
                            {props.instituicao}
                            {props.cpf}
                            <FormLabel for="cell">Telefone</FormLabel>
                            <FormInput id="cell" name="cell" type="number"/>

                            <FormLabel for="email">Nome</FormLabel>        
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
                            <RadioWrapper>
                                {props.time}
                            </RadioWrapper>
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
