import React, {useState} from 'react'
import {FaFlag} from 'react-icons/fa'
import {ChatData} from './ChatData'
import {RatingData} from '../RatingData'
import {ChatContainer,
        ChatNav,
        NavWrapper,
        ChatContent,
        ChatFooter,
        Avatar,
        Name,
        GroupMessages,
        Messages,
        MsgText,
        Time,
        ChatInput,
        ChatSubmit,
        FlagIcon,
        SubmitIcon,} from './ChatElements'
import ImgAvatar from "../../assets/avatar/avatar (33).svg";

import {Modal} from '../Modal';
import {ModalH2,
        ModalButton,
        ModalContent,
        ModalForm,
        FormWrapper,
        ModalTextArea,
        InfoWrapper,
        Info,
        RatingWrapper,
        Rating,
        RatingImg,
        RatingName,
        RatingQuantity,
        InfoSection,
        ModalAvatar
} from '../Modal/ModalElements';
import { RiMessage3Fill, RiStarSmileFill, RiTimeFill } from 'react-icons/ri';



const Chat = () => {
    const [report, setReport] = useState(false);
    const [profile, setProfile] = useState(true);
    return (
        <>
            <ChatContainer>
                <ChatNav>
                    <NavWrapper onClick={() => setProfile(true)} ariallabel="A">
                        <Avatar src={ImgAvatar}/>
                        <Name>Carina</Name>
                    </NavWrapper>
                    <FlagIcon onClick={() => setReport(true)}>
                        <FaFlag/>
                    </FlagIcon>
                </ChatNav>
                <ChatContent>
                        {ChatData.map((data) => {
                            return (
                            <GroupMessages msgType={data.msgType}>
                                <Messages msgType={data.msgType}>
                                    <MsgText>{data.msgText}</MsgText>
                                    <Time>{data.msgTime}</Time>
                                </Messages>
                            </GroupMessages>
                        )})}
                </ChatContent>

                <ChatFooter>
                    <ChatInput placeholder="Digite sua mensagem"/>
                    <ChatSubmit>
                        <SubmitIcon />
                    </ChatSubmit>
                </ChatFooter>
            </ChatContainer>

            <Modal trigger={report} setTrigger={() => setReport(false)}>
                <ModalContent>
                    <ModalH2>Nos diga abaixo a sua denúncia</ModalH2>
                    <ModalForm method="GET" action="">
                        <FormWrapper>
                            <ModalTextArea
                                name="report"
                                id="report"
                                rows="15"
                            ></ModalTextArea>
                            <ModalButton>
                                {" "}
                                    Reportar!
                                {" "}
                            </ModalButton>
                        </FormWrapper>
                    </ModalForm>
                </ModalContent>
            </Modal>
        
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
        </>
    )
}

export default Chat
