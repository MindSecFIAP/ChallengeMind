import React from 'react'
import styled from "styled-components";
import Chat from '../../components/Chat'
import SideBar from '../../components/UserSideBar'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`

const ChatUser = () => {
    return (
        <>
            <Container>
                <SideBar/>
                <Chat/>
            </Container>
        </>
    )
}

export default ChatUser
