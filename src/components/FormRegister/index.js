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
        FormLabel} from '../Global/Form'
import ImageSlider from '../../components/ImageSlider'
import { SliderData } from '../../components/ImageSlider/SliderData.js'


const FormRegister = (props) => {
    return (
        <>
            <Container>
                <FormContainer>
                    <Form onSubmit={props.submit}>
                        <FormH1>Cadastro {(props.title) == null ? "de Usuário" : props.title}</FormH1>
                        <FormWrapper>
                            <FormLabel for="name" >Nome</FormLabel>
                            <FormInput id="name" name="nome" type="text" onChange={props.onChangeName} value={props.vlName}/>

                            {props.lblCrp}
                            {props.crp}

                            {props.lblRm}
                            {props.rm}

                            {props.lblInstitution}
                            {props.institution}

                            {props.lblCpf}
                            {props.cpf}

                            <FormLabel for="cell">Telefone</FormLabel>
                            <FormInput id="cell" onChange={props.onChangeCell} name="telefone" type="number" value={props.vlCell}/>

                            <FormLabel for="email">Email</FormLabel>        
                            <FormInput id="email" onChange={props.onChangeEmail} name="email" type="email" value={props.vlEmail}/>

                            <FormLabel for="date">Data de Nascimento</FormLabel>        
                            <FormInput id="date" onChange={props.onChangeNascimento} type="date" name="dataNascimento" value={props.vlDate}/>
                            
                            <FormLabel>Gênero</FormLabel>        
                            <RadioWrapper onChange={props.onChangeGender}>
                                    <FormRadio type="radio" name="genero" id="male" value="M" />
                                    <FormRadioLabel for="male">Masculino</FormRadioLabel>

                                    <FormRadio type="radio" name="genero" id="female" value="F"/>
                                    <FormRadioLabel for="female">Feminino</FormRadioLabel>

                                    <FormRadio type="radio" name="genero" id="others" value="O"/>
                                    <FormRadioLabel for="others">Outros</FormRadioLabel>
                            </RadioWrapper>
                            
                            {props.lblTime}
                            {props.time}

                            {props.terapeutica}
                            <FormLabel for="password">Senha</FormLabel>    
                            <FormInput id="password" onChange={props.onChangePassword} name="senha" type="password" value={props.vlPassword}/>

                            <Button className="submit btn" type="submit">
                                CONFIRMAR
                            </Button>
                        </FormWrapper>
                    </Form>
                </FormContainer>
                <ImageSlider slides={SliderData}/>
            </Container>
        </>
    )
}

export default FormRegister
