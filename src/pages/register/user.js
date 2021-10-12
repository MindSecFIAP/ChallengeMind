import React from 'react'
import NavBar from '../../components/NavBar'
import Mind from "../../assets/img/Mind.svg"
import { ImgLogo } from '../../components/NavBar/NavBarElements'
import FormRegister from '../../components/FormRegister'

const RegisterUser = () => {
    return (
        <>
            <NavBar return="/" img={<ImgLogo class="logo" src={Mind} alt="Logo Mind"/>}/>
            <FormRegister/>
        </>
    )
}

export default RegisterUser
