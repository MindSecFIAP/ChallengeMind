import React from 'react'
import NavBar from '../../components/NavBar'
import Mind from "../../assets/img/Mind.svg"
import { ImgLogo } from '../../components/NavBar/NavBarElements'
import FormRegister from '../../components/FormRegister'
import {FormLabel,
        FormInput} from '../../components/form'
import {RadioWrapper,
        FormRadio,
        FormRadioLabel,
        SelectWrapper,
        FormSelect,
        SelectOption} from '../../components/FormRegister/FormRegElements'

const RegisterIntern = () => {
    return (
        <>
            <NavBar return="/" img={<ImgLogo class="logo" src={Mind} alt="Logo Mind"/>}/>
            <FormRegister
                title="de Estagiário"

                lblRm={<FormLabel for="rm">Registro de Matrícula</FormLabel>}
                rm={<FormInput id="rm" name="rm" type="number"/>}

                lblInstitution={<FormLabel for="institution">Nome da Instituição de Ensino</FormLabel>}
                institution={<FormInput id="institution" name="institution" type="text"/>}
     
                lblCpf={<FormLabel for="cpf">CPF (Somente Números)</FormLabel>}
                cpf={<FormInput id="cpf" name="CPF" type="number"/>}


                lblTime={<FormLabel>Tempo de conversa</FormLabel>}
                time={
                    <RadioWrapper>
                        <FormRadio type="radio" name="time" id="thirty" value="30" />
                        <FormRadioLabel for="thirty">Conversa de 30min</FormRadioLabel>

                        <FormRadio type="radio" name="time" id="fourtyfive" value="45" />
                        <FormRadioLabel for="fourtyfive">Conversa de 45min</FormRadioLabel>

                        <FormRadio type="radio" name="time" id="sixty" value="60" />
                        <FormRadioLabel for="sixty">Conversa de 60min</FormRadioLabel>
                    </RadioWrapper>
                }
                
                terapeutica={
                    <SelectWrapper>
                      <FormLabel for="types">Linha terapêutica</FormLabel>
                      <FormSelect name="type" id="types">
                        <SelectOption value="" disabled selected>
                            Selecione
                        </SelectOption>

                        <SelectOption value="type_psica">
                            Psicanálise
                        </SelectOption>

                        <SelectOption value="type_jung">
                            Junguiana
                        </SelectOption>

                        <SelectOption value="type_tcc">
                            TCC
                        </SelectOption>

                        <SelectOption value="type_behav">
                            Behaviorismo
                        </SelectOption>

                        <SelectOption value="type_gesta">
                            Gestalt-terapia
                        </SelectOption>

                        <SelectOption value="type_human">
                            Humanista
                        </SelectOption>

                      </FormSelect>
                    </SelectWrapper>
                  }

                />
        </>
    )
}

export default RegisterIntern