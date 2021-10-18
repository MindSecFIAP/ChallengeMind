import styled from "styled-components";
import {Color} from '../Global/Color'
import Background from "../../assets/img/background-img.svg"

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${Color.darkgray} url(${Background}) repeat fixed;
    background-size: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    
    @media screen and (max-width: 1080px) {
        flex-direction: column-reverse;
        padding: 100px 0 50px 0;
    }
`

export const FormContainer = styled.div`
    width: 40vw;
    border-radius: 4px;
    max-width: 600px;
    padding: 32px;
    background: ${Color.gray};
    
    @media screen and (max-width: 1080px) {
        margin-top: 60px;
        width: 90vw;
    }
    
    @media screen and (min-width: 1080px){
        max-height: 600px;
        overflow-y: auto;
        &::-webkit-scrollbar{
            width: 13px;
            height: 13px;
        }

        &::-webkit-scrollbar-thumb{
            background: #555;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover{
            background: #666;
        }

        &::-webkit-scrollbar-track{
            background: #F0F0F0;
            border-radius: 5px;
        }
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
`

export const Button = styled.button`
    padding: .8rem 1.2rem;
    width: 100%;
    text-align: center;
    border-radius: 4px;
    
    background-color: ${Color.darkblue};
    color: ${Color.white};
    border: 0;
    
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: block;
    
    &:focus, &:hover {
        background-color: ${Color.blue};
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FormH1 = styled.h1`
    color: ${Color.white};
    text-align: center;
    margin-bottom: 32px;
    font-size: 24px;
    padding-bottom: 24px;
    border-bottom: 2px solid;
`

//--------- Radio Button

export const RadioWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
`
export const FormRadio = styled.input`
    display: none; 
`

export const FormRadioLabel = styled.label`
    ${FormRadio} + &{
        text-align: center;
        display: inline-block;
        margin-bottom: 32px;
        padding: 16px;
        background-color: ${Color.white};
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        width: 30%;

        @media screen and (max-width: 768px) {
            padding: 16px 0px;
        }
    }

    ${FormRadio}:checked + & {
        background-color: ${Color.bluegray};
    }
    
    ${FormRadio}:hover + & {
        cursor: pointer;
    }
}   
`

//--------- Select Tag

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormSelect = styled.select`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    width: 100%;
    background-color: ${Color.white};
`

export const SelectOption = styled.option`
    font-family: 'Montserrat';
`

