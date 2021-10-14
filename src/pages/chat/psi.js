import React from 'react'
import styled from "styled-components";
import Chat from '../../components/Chat'
import SideBar from '../../components/SideBar'
import {ReviewData} from '../../components/SideBar/ReviewData.js'
import {SideBarWrapper,
        StatusWrapper,
        Avatar,
        InfoWrapper,
        UserName,
        UserRate,
        AlertIcon,
        Review,
        ReviewWrapper,
        ReviewAvatar,
        Name,
        ReviewRate,
        ReviewText,
        ReviewUser} from '../../components/SideBar/SideBarElements'
import ImgAvatar from "../../assets/avatar/avatar (29).svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`
const ChatPsi = () => {
    return (
        <>
            <Container>
                <SideBar>
                    <StatusWrapper>
                        <Avatar src={ImgAvatar}/>
                        <InfoWrapper>
                            <UserName>José</UserName>
                            <UserRate><AlertIcon value={4.8}/>4.8</UserRate>
                        </InfoWrapper>
                    </StatusWrapper>
                    <SideBarWrapper>
                            {ReviewData.map((data) => {
                                return (
                                    <Review>
                                        <ReviewWrapper>
                                            <ReviewUser>
                                                <ReviewAvatar src={data.src}/>
                                                <Name>{data.username}</Name>
                                            </ReviewUser>
                                            <ReviewRate><AlertIcon value={data.value}/>{data.value}</ReviewRate>
                                        </ReviewWrapper>
                                        <ReviewText>{data.text}</ReviewText>
                                    </Review>
                            )})}
                    </SideBarWrapper>
                </SideBar>
                <Chat/>
            </Container>
        </>
    )
}

export default ChatPsi
