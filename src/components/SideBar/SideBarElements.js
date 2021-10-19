import styled from 'styled-components';
import {Color} from '../Global/Color'
import {FormInput} from '../Global/Form';
import {GoAlert} from 'react-icons/go';

let pHeight = window.innerHeight

export const SideBarContainer = styled.div`
    background-color: ${Color.darkblue};
    height: ${pHeight}px;
    width: 30vw;
    overflow: hidden;
    
    @media screen and (max-width: 768px){
        position: fixed;
        top:0;
        right: ${({isOpen}) => (isOpen ? '100%' : '0%')};
        transition: 0.3s ease-in-out;
        width: 100vw;
        z-index: 1;
    }
`;

export const SideBarButton = styled.div`
    @media screen and (min-width: 768px){
        display:none;
    }
`

export const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 91%;
    overflow-y: auto;
        &::-webkit-scrollbar{
            width: 3px;
            height: 3px;
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
`;

export const InputWrapper = styled.div`
    padding: 16px;
    position: sticky;
    -webkit-box-shadow: 1px 6px 10px -2px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 6px 10px -2px rgba(0,0,0,0.2);
    box-shadow: 1px 6px 10px -2px rgba(0,0,0,0.2);
`;

export const SideBarInput = styled(FormInput)`
    background-color: ${Color.bluegray};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 4px;
`;

export const ChatWrapper = styled.div`
    cursor: pointer;
`;

export const ChatItem = styled.div`
    height: 75px;
    padding: 16px;
    border-top: 1px solid ${Color.bluegray};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background-color: ${({isOpen}) => (isOpen ? "rgba(125, 136, 160,0.2)" : "")};
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: rgba(125, 136, 160,0.2);
    }

    &:last-child{
        border-bottom: 1px solid ${Color.bluegray};
    }

    &:first-child{
        background-color: rgba(125, 136, 160,0.2);
    }
`;

export const Avatar = styled.img`
    height: 100%;
    
    &.user{
        @media screen and (max-width: 768px){
            height: 60%;
        }
    }
`;

export const ItemWrapper = styled.div`
    padding-left: 8px;
    flex-direction: column;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Name = styled.h2`
    font-size: 16px;
    color: ${Color.white};
`;

export const Message = styled.p`
    font-size: 14px;
    color: rgba(255,255,255, .5);
    display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`;

// SideBar do Psicologo

export const StatusWrapper = styled.div`
    height: 200px;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        padding: 16px;
    }
`;

export const ReviewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const AlertIcon = styled(GoAlert)`
    color: ${({value}) => (value <= 2 ? '#00FF00' : (value > 4 ? '#FF0000' : '#FF0'))};
    margin-right: 8px;
`;

export const UserName = styled.h1`
    color: ${Color.white};
`;

export const UserRate = styled.h2`
    font-size: 24px;
    display:flex;
    flex-direction: row;
    align-items: center;
    color: ${Color.white};
`;

export const ReviewUser = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Review = styled.div`
    height: fit-content;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${Color.bluegray};

    &:last-child{
        margin-bottom: 120px;
    }
    
    @media screen and (max-width: 768px){
        &:last-child{
            margin-bottom: 175px;
        }
    }
`;


export const ReviewAvatar = styled.img`
    height: 50px;
`;

export const ReviewName = styled.p`
    margin-left: 8px;
    font-size: 20px;
    color: ${Color.white};

`;

export const ReviewRate = styled.p`
    font-size: 22px;
    display: flex;
    align-items: center;
    color: ${Color.white};
`;

export const ReviewText = styled.p`
    font-size: 15px;
    color: rgba(255,255,255, .5);
    text-indent: 24px;
`;
