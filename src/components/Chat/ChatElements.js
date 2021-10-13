import styled from "styled-components";
import {FormInput} from "../form"
import {RiSendPlane2Fill} from 'react-icons/ri'
import {Color} from "../color"
import Background from "../../assets/img/background-img.svg"

export const ChatContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${Color.darkgray} url(${Background}) repeat fixed;
    background-size: 50px;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-rows: 100px 1fr 75px;  
    overflow: hidden; 
`

export const ChatNav = styled.div`
    background-color: ${Color.blue};
    grid-area: 1 / 1 / 2 / 2;
    overflow: hidden; 
`

export const ChatContent = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    padding: 32px;
`

export const ChatFooter = styled.div`
    overflow: hidden; 
    background-color: ${Color.blue};
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 8px;
    justify-content: space-around;
`

export const Avatar = styled.image`
`

export const Name = styled.h1`
`

export const GroupMessages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({msgType}) => (msgType == "sent" ? "flex-start" : "flex-end")};
`

export const Messages = styled.div`
    padding: 16px;
    margin: 4px;
    background-color: ${({msgType}) => (msgType == "sent" ? Color.gray : Color.blue)};
    color: ${Color.white};
    border-radius: 12px;
    
    &:first-child{
        border-radius: ${({msgType}) => (msgType == "sent" ? "0px 12px 12px 12px" : "12px 0px 12px 12px")};;
    }
`

export const MsgText = styled.p`
`

export const Time = styled.small`
    text-align: right;
`

export const ChatInput = styled(FormInput)`
    margin-bottom: 0px;
    width: 95%;
    background-color: ${Color.bluegray};
    font-weight: bold;
    color: ${Color.black};

    &::placeholder{
        color: rgba(0,0,0,.4)
    }

    justify-self: start;
`

export const ChatSubmit = styled.button`
    background-color: transparent;
    border-style: none;
`

export const SubmitIcon = styled(RiSendPlane2Fill)`
    font-size: 30px;
    color: ${Color.bluegray};
    cursor: pointer;
    transition-duration: 1s ease;
    
    &:hover{
        color: ${Color.lightyellow};
        transition-duration: .1s;
        transform: scale(1.05);
    }
`
