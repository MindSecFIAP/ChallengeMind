import React from 'react'
import { UserData } from './UserData'
import {SideBarContainer,
        SideBarWrapper,
        SideBarInput,
        ChatWrapper,
        ChatItem,
        Avatar,
        Name,
        Message,
        ItemWrapper,
        InputWrapper } from './SideBarElements'

const SideBar = (userAvatar,userName,userLastMessage) => {
    return (
        <>
            <SideBarContainer>
                <InputWrapper>
                    <SideBarInput/>
                </InputWrapper>
                <SideBarWrapper>
                    <ChatWrapper>                          
                        {UserData.map((data, index) => {
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
            </SideBarContainer>
        </>
    )
}

export default SideBar
