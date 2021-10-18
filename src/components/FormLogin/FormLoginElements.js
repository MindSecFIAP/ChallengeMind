import styled from "styled-components";
import {Color} from '../Global/Color'
import Background from "../../assets/img/background-img.svg"

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    padding: 30px 5px;
    background: ${Color.darkgray} url(${Background}) repeat fixed;
    background-size: 50px;
    `

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 2;
    overflow: hidden;
    
    @media screen and (max-height: 600px) {
        margin-top: 28px;
        justify-content: flex-start;
    }
`

export const FormContent = styled.form`
    background-color: ${Color.gray};
    max-width: 800px;
    width: 30vw;
    height: auto;
    z-index: 100%;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    
    @media screen and (max-width: 1250px){
        padding: 32px;
        width: 90vw;
    }
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${Color.white};
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    width: 100%;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    
    @media screen and (max-width: 360px) {
        flex-direction: column-reverse;
    }
`

export const Linker = styled.div`
    a{
        font-size: 1.2rem;
    padding: .8rem 1.2rem;
    width: 30%;
    min-width: 150px;
    text-align: center;
    margin-top: 2vh;
    border-radius: 4px;

    background-color: ${Color.darkblue};
    color: ${Color.white};

    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: block;

    &:focus, &:hover {
        background-color: ${Color.blue};
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 500px){
        width: 45%;
        min-width: 0px;
        font-size: 1rem;
    }
    @media screen and (max-width: 360px) {
        width: 100%;
    }
    }
`

export const Button = styled.a`
    font-size: 1.2rem;
    padding: .8rem 1.2rem;
    width: 30%;
    min-width: 150px;
    text-align: center;
    margin-top: 2vh;
    border-radius: 4px;

    background-color: ${Color.darkblue};
    color: ${Color.white};

    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: block;

    &:focus, &:hover {
        background-color: ${Color.blue};
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 500px){
        width: 45%;
        min-width: 0px;
        font-size: 1rem;
    }
    @media screen and (max-width: 360px) {
        width: 100%;
    }
`

export const ImgLogo = styled.img`
    width:100%;
    margin-bottom: 32px;
`