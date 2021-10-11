import React from 'react'
import Logo from "../../assets/img/MindSec.svg"

import {NavContainer,
        NavWrapper,
        LogoLink,
        ImgLogo} from './NavBarElements'

const NavBar = (props) => {
    return (
        <NavContainer>
            <NavWrapper>
                    <LogoLink href={props.return}>
                        <ImgLogo src={Logo} alt="Logo MindSec"/>
                    </LogoLink>
                    {props.img}
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar
