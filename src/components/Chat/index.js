import React from 'react'
import {ChatContainer,
        ChatNav,
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
        SubmitIcon,} from './ChatElements'

const Chat = () => {
    return (
        <>
            <ChatContainer>
                <ChatNav>
                    <Avatar src={Avatar}/>
                    <Name>Lorem Ipsum</Name>
                </ChatNav>

                <ChatContent>
                    <GroupMessages msgType="sent">
                        <Messages msgType="sent">
                            <MsgText>Lorem Ipsum</MsgText>
                            <Time>11:25</Time>
                        </Messages>
                        <Messages msgType="sent">
                            <MsgText>Lurempzinho testes testeasdasdasdsa</MsgText>
                            <Time>19:20</Time>
                        </Messages>
                    </GroupMessages>
                    <GroupMessages msgType="received">
                        <Messages msgType="received">
                            <MsgText>Lorem Ipsum</MsgText>
                            <Time>11:25</Time>
                        </Messages>
                        <Messages msgType="received">
                            <MsgText>Lurempzinho</MsgText>
                            <Time>19:20</Time>
                        </Messages>
                    </GroupMessages>
                </ChatContent>

                <ChatFooter>
                    <ChatInput placeholder="Digite sua mensagem"/>
                    <ChatSubmit>
                        <SubmitIcon />
                    </ChatSubmit>
                </ChatFooter>
            </ChatContainer>
        </>
    )
}

export default Chat
