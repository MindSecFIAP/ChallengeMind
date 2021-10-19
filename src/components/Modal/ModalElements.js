import styled from "styled-components";
import {Color} from '../global/Color'

import {IoMdCloseCircle} from 'react-icons/io'
import { Avatar } from "../Chat/ChatElements";

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
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    
    display:flex;
    flex-direction: column;
    align-items: center;

`

export const Icon = styled(IoMdCloseCircle)`
    font-size: 24px;
    position: absolute;
    top: 8px;
    right: 8px;

    color: ${({isWhite}) => (isWhite ? Color.white : Color.black )};
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

// Modal de Denúncia
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

// Perfil do Psicólogo/Estagiário

export const InfoSection = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`

export const InfoWrapper = styled.div`
    margin-left: 12px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`


export const Info = styled.p`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;

    &:hover{
        cursor: default;
    }
`

// Modal de Avaliação
export const RatingWrapper = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 32px;
`

export const Rating = styled.div`
    text-align:center;
    align-self: center;
`

export const RatingImg = styled.img`
    width: 75px;
    
    border: ${({active}) => (active ? "4px solid #000" : "4px solid ${Color.gray}")};
    border-radius: 8px;
`

export const RatingName = styled.p`
    font-size: 14px;
`

export const RatingQuantity = styled.p`
  transform: translate(425%,375%);
  background-color: ${Color.darkyellow};
  width: fit-content;
  padding: 1px;
  min-width: 20px;
  text-align: center;
`

export const ModalAvatar = styled(Avatar)`
    height: 125px;;
`

export const RatingButton = styled.button`
    border-style: none;
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
export const RatingForm = styled.form`

`
export const RateGroup = styled.div`

`

export const RateCheck = styled.input`
    display: none;
`

export const CheckLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const CheckImg = styled(RatingImg)`
    margin-bottom: 4px;	
    transition: 0.2s;
    ${RateCheck}:checked + ${CheckLabel} &{
        border: 4px solid ${Color.darkyellow};
    }
    
    ${RateCheck}:hover + &{
        border: 2px solid ${Color.darkyellow};
    }
`

export const RateTextArea = styled(ModalTextArea)`
    height: 100%;
`

export const RateLabel = styled.label`
    font-size: 14px;
`