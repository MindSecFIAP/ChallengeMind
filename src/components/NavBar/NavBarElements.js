import styled from "styled-components";
import {Color} from "../color";

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    z-index: 20;
    overflow: hidden;
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
    background-color: ${Color.darkblue};
    width: 100vw;
    position: sticky;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const LogoLink = styled.a`
    cursor: pointer;
`

export const ImgLogo = styled.img`
    height: 3rem;
    padding: .5rem;
`