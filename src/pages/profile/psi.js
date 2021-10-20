import React from 'react'
import NavBar from '../../components/NavBar'
import Mind from "../../assets/img/Mind.svg"
import Conversa from "../../assets/img/conversa.svg"
import Supervisao from "../../assets/img/supervisao.svg"

import {ImgLogo} from '../../components/NavBar/NavBarElements'
import {RatingData} from '../../components/Global/RatingData'
import ImgAvatar from "../../assets/avatar/avatar-33.svg";
import {RiTimeFill,
        RiMessage3Fill,
        RiStarSmileFill} from 'react-icons/ri'
import {ProfileContainer,
        ProfileWrapper,
        RatingWrapper,
        Rating,
        RatingQuantity,
        RatingImg,
        RatingName,
        InfoContainer,
        Avatar,
        Name,
        InfoWrapper,
        Info,
        InfoText,
        ButtonsWrapper,
        ImgButton,
        Button,
        ButtonText} from '../../components/Global/ProfileElements'

const PsiProfile = () => {
    return (
        <>
            <NavBar return="/" img={<ImgLogo class="logo" src={Mind} alt="Logo Mind"/>}/>
            <ProfileContainer>
                <ProfileWrapper>
                    <RatingWrapper>
                        {RatingData.map((data) => {
                                    return (
                                    <Rating>
                                        <RatingQuantity>{data.quantity}</RatingQuantity>
                                        <RatingImg src={data.src} alt={`Ícone de ${data.name}`}/>
                                        <RatingName>{data.name}</RatingName>
                                    </Rating>
                                    )})}
                    </RatingWrapper>
                    <InfoContainer>
                        <Avatar src={ImgAvatar}/>
                        <InfoWrapper>
                            <Name>Carina</Name>
                            <Info>
                                <RiStarSmileFill />
                                <InfoText>4.5</InfoText>
                            </Info>
                            <Info>
                                <RiMessage3Fill />
                                <InfoText>30</InfoText>
                            </Info>
                            <Info>
                                <RiTimeFill />
                                <InfoText>4 Meses</InfoText>
                            </Info>
                        </InfoWrapper>
                    </InfoContainer>
                    <ButtonsWrapper>
                        <Button href="#">
                            <ImgButton src={Supervisao}/>
                            <ButtonText>Supervisão de Estagiário</ButtonText>
                        </Button>
                        <Button href="/chatPsi">
                            <ImgButton src={Conversa}/>
                            <ButtonText>Iniciar uma Conversa</ButtonText>
                        </Button>
                    </ButtonsWrapper>
                </ProfileWrapper>
            </ProfileContainer>
        </>
    )
}

export default PsiProfile
