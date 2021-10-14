import React from 'react'
import styled from "styled-components";
import Chat from '../../components/Chat'
import SideBar from '../../components/UserSideBar'
import {SideBarWrapper,
    SideBarInput,
    ChatWrapper,
    ChatItem,
    Avatar,
    Name,
    Message,
    ItemWrapper,
    InputWrapper } from '../../components/UserSideBar/SideBarElements'
import { UserData } from '../../components/UserSideBar/UserData'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`

const ChatUser = () => {
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

                <Chat/>
            </Container>
        </>
    )
}

export default ChatUser
