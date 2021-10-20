import styled from "styled-components";
import {Color} from './Color';
import Background from "../../assets/img/background-img.svg";
import LightBackground from "../../assets/img/light_background.svg";

let pHeight = window.innerHeight

export const ProfileContainer = styled.div`
    background: ${Color.darkgray} url(${Background}) repeat fixed;
    background-size: 50px;
    height: ${pHeight}px;
    overflow-y: auto;
    width: 100vw;
`

export const ProfileWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `

export const RatingWrapper = styled.div`
    width: 100%;
    padding: 100px 0 64px 0;
    background: #555555 url(${LightBackground}) repeat fixed;
    background-size: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 16px;
    margin-bottom: 48px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 50px 0 20px 0;
    }
    
    @media screen and (max-width: 310px) {
        margin-top: 64px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
`

export const Rating = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RatingQuantity = styled.p`
  transform: translate(150%,365%);
  background-color: ${Color.darkyellow};
  width: fit-content;
  padding: 1px;
  min-width: 20px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
      transform: translate(100%,265%);
    }
`

export const RatingImg = styled.img`
    height: 75px;

    @media screen and (max-width: 768px) {
        height: 50px;
    }
`

export const RatingName = styled.p`
    margin-top: 8px;
    font-weight: bold;
`

export const InfoContainer = styled.div`
    background-color: ${Color.white};
    border-radius: 16px;
    padding: 32px;
    width: 15vw;
    display:flex;
    margin-top: -64px;
    flex-direction: column;
    
    @media screen and (max-width: 768px) {
        margin-top: -32px;
        height: 65%;
        width: 85vw;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
`

export const Avatar = styled.img`
    height: 150px;
    
    @media screen and (max-width: 768px) {
        height: 120px;
    }
`

export const Name = styled.p`
    padding: 4px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    padding: 2px;
`

export const InfoText = styled.p`
    font-size: 20px;
`

export const ButtonsWrapper = styled.div`
    margin-top: -32px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        margin-top: 80px;
        flex-direction: row;
    }
`

export const Button = styled.a`
    text-decoration: none;
    text-align: center;
    color: ${Color.white};
`

export const ImgButton = styled.img`
    height: 200px;
    opacity: 0.7;
    
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
    
    @media screen and (max-width: 768px) {
        height: 100px;
    }
`

export const ButtonText = styled.p`
    text-align: center;
    text-wrap: break-word;
    @media screen and (max-width: 768px) {
        max-width: 120px;
    }
`