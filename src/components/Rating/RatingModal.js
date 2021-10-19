import React, {useState} from 'react'
import {Modal} from '../../components/Modal';
import {ModalH2,
        ModalContent,
        RatingForm,
        RatingWrapper,
        InfoSection,
        ModalAvatar,
        RatingButton
 } from '../../components/Modal/ModalElements';
import IconRating from './IconRating';

const RatingModal = (props) => {
    const [rating, setRating] = useState(false);
    return (
        <>
            <Modal trigger={rating} setTrigger={() => setRating(false)}>
                <ModalContent>
                    <ModalH2>Avaliação</ModalH2>
                    <InfoSection>
                        <ModalAvatar src={props.imgavatar} />
                    </InfoSection>
                    <RatingForm method="get">
                        <IconRating icon={props.icon}/>
                            {props.children}
                        <RatingButton type="submit">Enviar</RatingButton>
                    </RatingForm>
                </ModalContent>
            </Modal>
        </>
    )
}

export default RatingModal
