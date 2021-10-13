import React from 'react'
import Chat from '../../components/Chat'
import SideBar from '../../components/UserSideBar'
import {Container} from '../../components/UserSideBar/SideBarElements'

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
