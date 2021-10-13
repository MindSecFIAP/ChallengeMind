import React from 'react'
import Chat from '../../components/Chat'
import SideBar from '../../components/SideBar'
import {Container} from '../../components/SideBar/SideBarElements'

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
