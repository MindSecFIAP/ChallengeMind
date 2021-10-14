import styled from "styled-components";
import {FormInput} from "../form"
import {RiSendPlane2Fill} from 'react-icons/ri'
import {Color} from "../color"
import Background from "../../assets/img/background-img.svg"

let iHeight = window.innerHeight

export const ChatContainer = styled.div`
    width: 100%;
    height: ${iHeight}px;
    background: ${Color.darkgray} url(${Background}) repeat fixed;
    background-size: 50px;
    display: flex;
    flex-direction: column;
`

export const ChatNav = styled.div`
    height: 75px;
    padding: 8px;
    background-color: ${Color.blue};
    color: ${Color.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    -webkit-box-shadow: 1px 6px 10px -2px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 6px 10px -2px rgba(0,0,0,0.2);
    box-shadow: 1px 6px 10px -2px rgba(0,0,0,0.2);
`

export const NavWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ChatContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar{
        width: 8px;
        height: 8px;
    }
    
    &::-webkit-scrollbar-thumb{
        background: #555;
    }
    
    &::-webkit-scrollbar-thumb:hover{
        background: #666;
    }

    &::-webkit-scrollbar-track{
        background: transparent;
        }
`

export const ChatFooter = styled.div`
    position: sticky;
    background-color: ${Color.blue};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 8px;
    justify-content: space-around;

    -webkit-box-shadow: 1px -6px 10px -2px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px -6px 10px -2px rgba(0,0,0,0.2);
    box-shadow: 1px -6px 10px -2px rgba(0,0,0,0.2); 
`

export const Avatar = styled.img`
    height: 100%;
`

export const Name = styled.h1`
    font-size: 32px;
    margin-left: 8px;
`

export const GroupMessages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({msgType}) => (msgType != "sent" ? "flex-start" : "flex-end")};
`

export const Messages = styled.div`
    padding: 16px;
    margin: 4px;
    background-color: ${({msgType}) => (msgType != "sent" ? "#222" : "#293c66")};
    color: ${Color.white};
    border-radius: 12px;
    box-shadow: 2px 2px 5px -3px ${Color.black};
    max-width: 30%;
    min-width: 200px;
    
    &:first-child{
        border-radius: ${({msgType}) => (msgType != "sent" ? "0px 12px 12px 12px" : "12px 12px 0px 12px")};
    }
    
    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`

export const MsgText = styled.p`
`

export const Time = styled.small`
    float: right;
    margin: 1px;
    color: rgba(255, 255, 255,0.4);
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
export const FlagIcon = styled.div`
    font-size: 24px;
    cursor: pointer;

    &:hover{
        color: ${Color.lightyellow};
    }
`