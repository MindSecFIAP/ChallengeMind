import React, {useState} from 'react'
import styled from "styled-components";
import Chat from '../../components/Chat'
import SideBar from '../../components/SideBar'
import {RatingData} from '../../components/Global/RatingData'
import {SideBarWrapper,
        SideBarInput,
        ChatWrapper,
        ChatItem,
        Avatar,
        Name,
        Message,
        ItemWrapper,
        InputWrapper} from '../../components/SideBar/SideBarElements'
import {UserData} from '../../components/SideBar/UserData'
import {Modal} from '../../components/Modal';
import {ModalH2,
        ModalContent,
        InfoWrapper,
        Info,
        RatingWrapper,
        Rating,
        RatingImg,
        RatingName,
        RatingQuantity,
        InfoSection,
        ModalAvatar} from '../../components/Modal/ModalElements';
import {RiMessage3Fill,
        RiStarSmileFill,
        RiTimeFill } from 'react-icons/ri';
import ImgAvatar from "../../assets/avatar/avatar (33).svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`

const ChatUser = () => {
    const [profile, setProfile] = useState(false);
    return (
        <>
            <Container>
                <SideBar>
                    <InputWrapper>
                        <SideBarInput/>
                    </InputWrapper>
                    <SideBarWrapper>
                        <ChatWrapper>                          
                            {UserData.map((data) => {
                            return (
                                <ChatItem isOpen={false}>
                                    <Avatar src={data.userAvatar}/>
                                    <ItemWrapper>
                                        <Name>{data.userName}</Name>
                                        <Message>{data.userLastMessage}</Message>
                                        </ItemWrapper>
                                </ChatItem>
                            )})}
                        </ChatWrapper>
                    </SideBarWrapper>
                </SideBar>

                <Chat open={() => setProfile(true)}/>

                <Modal trigger={profile} setTrigger={() => setProfile(false)}>
                <ModalContent>
                    <ModalH2>Perfil da Carina</ModalH2>
                    <InfoSection>
                        <ModalAvatar src={ImgAvatar}/>
                        <InfoWrapper>
                            <Info><RiStarSmileFill style={{marginRight: "8px"}}/>4.5</Info>
                            <Info><RiMessage3Fill style={{marginRight: "8px"}}/>30</Info>
                            <Info><RiTimeFill style={{marginRight: "8px"}}/>4 Meses</Info>
                        </InfoWrapper>
                    </InfoSection>
                    <RatingWrapper>
                        {RatingData.map((data) => {
                                return (
                                <Rating>
                                    <RatingQuantity>{data.quantity}</RatingQuantity>
                                    <RatingImg src={data.src}/>
                                    <RatingName>{data.name}</RatingName>
                                </Rating>
                        )})}
                    </RatingWrapper>
                </ModalContent>
            </Modal>
            </Container>
        </>
    )
}

export default ChatUser
