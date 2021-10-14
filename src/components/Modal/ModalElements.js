import styled from "styled-components";
import {Color} from '../color'

import {FaTimesCircle} from 'react-icons/fa'

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.7);

    position: fixed;
    left: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalWrapper = styled.div`
    background-color: ${Color.white};
    padding: 2.4rem;
    border-radius: 0.5rem;
    width: 90vw;
    max-width: 350px;
    position: relative;
    z-index: 1;
    
    display:flex;
    flex-direction: column;
    align-items: center;

`

export const Icon = styled(FaTimesCircle)`
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;

    color: ${Color.black};
    opacity: 0.7;

    transition: all 0.2s ease-in-out;
    
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`
export const CloseButton = styled.button`
    border: none;
`

export const ModalH2 = styled.h2`
    text-align: center;
    margin-bottom: 16px;
`

export const ModalImg = styled.img`
    width: 60%;

    margin-top: 16px;
`

export const ModalButton = styled.a`
    font-size: 1.2rem;
    padding: .8rem 1.2rem;
    width: 100%;
    min-width: 150px;
    text-align: center;
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
    margin-top: 16px;
`

export const ModalContent = styled.div`
    width: 100%;
`

export const ModalForm = styled.form`

`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalTextArea = styled.textarea`
    margin-top: 16px;
    width: 100%;
    border-radius: 4px;
    resize: none;
    padding: 4px;
`
