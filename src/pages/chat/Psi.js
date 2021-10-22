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
import {CloseButton, Icon, RateTextArea} from '../../components/Modal/ModalElements'
import RatingModal from '../../components/Rating/RatingModal'
import {OpenIcon} from '../../components/Chat/ChatElements'
import axios from 'axios';
const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`


const ChatPsi = () => {

    const [isOpen, setIsOpen] = useState(true);

    const [attention, setAttention] = useState({
        elogio:""
    })

    const handleChange = (e) => {
        setAttention({ ...attention, [e.target.name]: e.target.value });
        console.log(attention)
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/elogio", attention)
    
          .then((res) => {
            console.log(res.data)
          })
          .catch((e) => {
            console.log(e);
          });
      };

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [rate, setRate] = useState(false)
    const [final, setFinal] = useState("")

    const handleChangePage = (e) => {
        setFinal({value: e.target.value});
    };

    const changePage = (e) =>{
        e.preventDefault()
        final.value.toLowerCase() == "avaliar" ? setRate(true) : console.log("Digitou errado");
        
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
                <Chat imgavatar={ImgAvatar} username="José" openIcon={<OpenIcon onClick={toggle}/>} 
                ChangePage={changePage} onChange={handleChangePage}/>
                <RatingModal trigger={rate} setTrigger={() => setRate(false)} 
                imgavatar={ImgAvatar} icon="alert" submit={handleSubmit}>
                    <RateTextArea 
                        name="elogio"  
                        id="rateUser" 
                        rows="15"
                        maxlength="50"
                        placeholder="Digite aqui um resumo do que foi conversado"
                        value={attention.elogio}
                        onChange={handleChange}
                    />
                </RatingModal>
            </Container>
        </>
    )
}

export default ChatPsi
