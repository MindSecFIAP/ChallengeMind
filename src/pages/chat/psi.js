import React, {useState} from 'react'
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
        ReviewName,
        ReviewRate,
        ReviewText,
        ReviewUser,} from '../../components/SideBar/SideBarElements'
import ImgAvatar from "../../assets/avatar/avatar-29.svg";
import {SideBarButton} from '../../components/SideBar/SideBarElements'
import {CloseButton, Icon, RateTextArea, RateLabel} from '../../components/Modal/ModalElements'
import RatingModal from '../../components/Rating/RatingModal'
import {OpenIcon} from '../../components/Chat/ChatElements'
const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`
const ChatPsi = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

        return (
        <>
            <Container>
                <SideBar isOpen={isOpen}>
                    <StatusWrapper>
                        <SideBarButton>
                            <CloseButton>
                                <Icon isWhite={true} onClick={toggle}/>
                            </CloseButton>
                        </SideBarButton>
                        <Avatar src={ImgAvatar} className="user"/>
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
                                                <ReviewName>{data.username}</ReviewName>
                                            </ReviewUser>
                                            <ReviewRate><AlertIcon value={data.value}/>{data.value}</ReviewRate>
                                        </ReviewWrapper>
                                        <ReviewText>{data.text}</ReviewText>
                                    </Review>
                            )})}
                    </SideBarWrapper>
                </SideBar>
                <Chat imgavatar={ImgAvatar} username="José" openIcon={<OpenIcon onClick={toggle}/>} />

                <RatingModal imgavatar={ImgAvatar} icon="alert">
                    <RateTextArea 
                        name="textRate"  
                        id="rateUser" 
                        rows="15"
                        maxlength="50"
                        placeholder="Digite aqui um resumo do que foi conversado"
                    />
                </RatingModal>
            </Container>
        </>
    )
}

export default ChatPsi
