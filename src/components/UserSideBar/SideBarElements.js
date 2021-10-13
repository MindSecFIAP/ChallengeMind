import styled from 'styled-components';
import {Color} from '../color'
import { FormInput } from '../form';

export const SideBarContainer = styled.div`
    background-color: ${Color.darkblue};
    height: 100vh;
    width: 30vw;
    max-width: 400px;
`;

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
            background: ${Color.white};
        }
`;

export const InputWrapper = styled.div`
    padding: 16px;
    position: sticky;
    height: 9%;
`

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
    height: 10vh;
    padding: 16px;
    border-top: 1px solid ${Color.bluegray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: ${({isOpen}) => (isOpen ? "rgba(125, 136, 160,0.2)" : "")};

    &:last-child{
        border-bottom: 1px solid ${Color.bluegray};
    }
`;

export const Avatar = styled.img`
    height: 100%;
`;

export const ItemWrapper = styled.div`
    padding-left: 8px;
    flex-direction: column;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Name = styled.h2`
    font-size: 16px;
    color: ${Color.white};
`;

export const Message = styled.p`
    font-size: 14px;
    color: ${Color.white};
    display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`