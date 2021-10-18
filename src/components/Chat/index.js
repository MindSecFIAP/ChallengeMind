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
        SubmitIcon} from './ChatElements'
import ImgAvatar from "../../assets/avatar/avatar-33.svg";
import {Modal} from '../Modal';
import {ModalH2,
        ModalButton,
        ModalContent,
        ModalForm,
        FormWrapper,
        ModalTextArea,} from '../Modal/ModalElements';


const Chat = (props) => {
    const [report, setReport] = useState(false);
    
    return (
        <>
            <ChatContainer>
                <ChatNav>
                    {props.openIcon}
                    <NavWrapper>
                        <Avatar src={ImgAvatar} onClick={props.open}/>
                        <Name onClick={props.open}>Carina</Name>
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
        </>
    )
}

export default Chat
