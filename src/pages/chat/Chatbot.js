import React, { useState } from 'react'
import styled from "styled-components";
import Chat from '../../components/Chat'
import SideBar from '../../components/SideBar'
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
import ImgAvatar from "../../assets/img/chatbot.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`
const ChatBot = () => {

    const [page, setPage] = useState()

    const handleChangePage = (e) => {
        setPage({value: e.target.value});
    };

    const changePage = (e) =>{
        e.preventDefault()
        page.value.toLowerCase() == "ajuda" ? window.location = "/chatUser" : console.log("Digitou errado");
        
    }

    return (
        <>
            <Container>
                <SideBar>
                    <InputWrapper>
                        <SideBarInput/>
                    </InputWrapper>
                    <SideBarWrapper>
                        <ChatWrapper>                          
                                <ChatItem isOpen={false}>
                                    <Avatar src={ImgAvatar}/>
                                    <ItemWrapper>
                                        <Name>MindBot</Name>
                                        <Message>Digite Ajuda caso necessite de um profissional</Message>
                                        </ItemWrapper>
                                </ChatItem>
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

                <Chat imgavatar={ImgAvatar} username="MindBot (Digite 'Ajuda' caso necessite de um profissional)"
                ChangePage={changePage} onChange={handleChangePage}
                
                />
            </Container>
        </>
    )
}

export default ChatBot
