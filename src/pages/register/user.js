import React from 'react'
import NavBar from '../../components/NavBar'
import Mind from "../../assets/img/Mind.svg"
import ImageSlider from '../../components/ImageSlider'
import { ImgLogo } from '../../components/NavBar/NavBarElements'
import { SliderData } from '../../components/ImageSlider/SliderData.js'

const RegisterUser = () => {
    return (
        <>
            <NavBar return="/" img={<ImgLogo class="logo" src={Mind} alt="Logo Mind"/>}/>
            <ImageSlider slides={SliderData}/>
        </>
    )
}

export default RegisterUser
