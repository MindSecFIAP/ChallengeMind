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
        InputWrapper,
        SideBarButton} from '../../components/SideBar/SideBarElements'
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
        ModalAvatar,
        RateGroup,
        RateCheck,
        CheckLabel,
        CheckImg,
        CloseButton,
        Icon} from '../../components/Modal/ModalElements';
import {RiMessage3Fill,
        RiStarSmileFill,
        RiTimeFill } 
        from 'react-icons/ri';
import {OpenIcon} from '../../components/Chat/ChatElements'
import ImgAvatar from "../../assets/avatar/avatar-33.svg";
import RatingModal from '../../components/Rating/RatingModal'
import Amigavel from '../../assets/elogios/elogio_amigavel.svg'
import Atencioso from '../../assets/elogios/elogio_atencioso.svg'
import Confiavel from '../../assets/elogios/elogio_confiavel.svg'
import Focado from '../../assets/elogios/elogio_focado.svg'
import Motivacional from '../../assets/elogios/elogio_motivacional.svg'
import Sabio from '../../assets/elogios/elogio_sabio.svg'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`

const ChatUser = () => {
    const [profile, setProfile] = useState(false);

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Container>
                <SideBar isOpen={isOpen}>
                        <SideBarButton>
                            <CloseButton>
                                <Icon isWhite={true} onClick={toggle}/>
                            </CloseButton>
                        </SideBarButton>
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

            <Chat imgavatar={ImgAvatar} username="Carina" open={() => setProfile(true)} openIcon={<OpenIcon onClick={toggle}/>}/>

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

            <RatingModal imgavatar={ImgAvatar} icon="star">
                <RatingWrapper>
                    <RateGroup>
                        <RateCheck id="amigavel" name="amigavel" value="amigavel" type="checkbox"/>
                        <CheckLabel for="amigavel"><CheckImg src={Amigavel}/>Amigável</CheckLabel>
                    </RateGroup>
                    <RateGroup>
                        <RateCheck id="atencioso" name="atencioso" value="atencioso" type="checkbox"/>
                        <CheckLabel for="atencioso"><CheckImg src={Atencioso}/>Atencioso</CheckLabel>
                    </RateGroup>
                    <RateGroup>
                        <RateCheck id="confiavel" name="confiavel" value="confiavel" type="checkbox"/>
                        <CheckLabel for="confiavel"><CheckImg src={Confiavel}/>Confiável</CheckLabel>
                    </RateGroup>
                    <RateGroup>
                        <RateCheck id="focado" name="focado" value="focado" type="checkbox"/>
                        <CheckLabel for="focado"><CheckImg src={Focado}/>Focado</CheckLabel>
                    </RateGroup>
                    <RateGroup>
                        <RateCheck id="motivacional" name="motivacional" value="motivacional" type="checkbox"/>
                        <CheckLabel for="motivacional"><CheckImg src={Motivacional}/>Motivacional</CheckLabel>
                    </RateGroup>
                    <RateGroup>
                        <RateCheck id="sabio" name="sabio" value="sabio" type="checkbox"/>
                        <CheckLabel for="sabio"><CheckImg src={Sabio}/>Sábio</CheckLabel>
                    </RateGroup>
                </RatingWrapper>
            </RatingModal>
            </Container>
        </>
    )
}

export default ChatUser
