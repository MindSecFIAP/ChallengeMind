import React, {useState} from 'react'
import {FaFlag} from 'react-icons/fa'
import {ChatData} from './ChatData'
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
        ModalTextArea
} from '../Modal/ModalElements';



const Chat = () => {
    const [betray, setBetray] = useState(false);
    return (
        <>
            <ChatContainer>
                <ChatNav>
                    <NavWrapper>
                        <Avatar src={ImgAvatar}/>
                        <Name>Carina</Name>
                    </NavWrapper>
                    <FlagIcon onclick="ModalBetray.open()">
                        <FaFlag onClick={() => setBetray(true)}/>
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

            <Modal trigger={betray} setTrigger={() => setBetray(false)}>
                <ModalContent>
                    <ModalForm method="GET" action="">
                        <FormWrapper>
                            <ModalH2>Nos diga abaixo a sua denúncia</ModalH2>
                            <ModalTextArea
                                name="betray"
                                id="betray"
                                rows="15"
                            ></ModalTextArea>
                            <ModalButton className="btn" onclick="ModalBetray.close()">
                                {" "}
                                    Reportar!
                                {" "}
                            </ModalButton>
                        </FormWrapper>
                    </ModalForm>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Chat
