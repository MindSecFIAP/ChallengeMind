import React, {useState,useEffect} from 'react'
import axios from "axios"
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
import {Modal} from '../Modal';
import {ModalH2,
        ModalButton,
        ModalContent,
        ModalForm,
        FormWrapper,
        ModalTextArea,
        ModalRealButton,} from '../Modal/ModalElements';


const Chat = (props) => {
    const [report, setReport] = useState(false);

    useEffect(()=>{
        axios.get("/denuncia").then((res)=>{
            console.log(res.data)
        })
    },[])

    const [acusacao, setAcusacao] = useState({
        acusacao:""
    })

    const handleChange = (e) => {
        setAcusacao({ ...acusacao, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/denuncia", acusacao)
    
          .then((res) => {
            console.log(res.data)
          })
          .catch((e) => {
            console.log(e);
            console.log(acusacao)
          });
      };

    return (
        <>
            <ChatContainer>
                <ChatNav>
                    {props.openIcon}
                    <NavWrapper>
                        <Avatar src={props.imgavatar} onClick={props.open}/>
                        <Name onClick={props.open}>{props.username}</Name>
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

                <ChatFooter onSubmit={props.ChangePage}>
                    <ChatInput placeholder="Digite sua mensagem" type="text" onChange={props.onChange}/>
                    <ChatSubmit>
                        <SubmitIcon />
                    </ChatSubmit>
                </ChatFooter>
            </ChatContainer>

            <Modal trigger={report} setTrigger={() => setReport(false)}>
                <ModalContent>
                    <ModalH2>Nos diga abaixo a sua denúncia</ModalH2>
                    <ModalForm onSubmit={handleSubmit}>
                        <FormWrapper>
                            <ModalTextArea
                                name="acusacao"
                                id="report"
                                rows="15"
                                value={acusacao.acusacao}
                                onChange={handleChange}
                            />
                            <ModalRealButton type="submit">
                                {" "}
                                    Reportar!
                                {" "}
                            </ModalRealButton>
                        </FormWrapper>
                    </ModalForm>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Chat
