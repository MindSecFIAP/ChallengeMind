import styled from "styled-components";
import {Color} from './color'

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

    /* To remove arrow of Number Inputs,
        Works on Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* To remove arrow of Number Inputs,
       Works on Firefox */
    & {
        -moz-appearance: textfield;
    }

    &:focus {
        border: 2px solid ${Color.lightyellow};
    }
`