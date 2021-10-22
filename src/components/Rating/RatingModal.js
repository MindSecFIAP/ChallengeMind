import React from 'react'
import {Modal} from '../../components/Modal';
import {ModalH2,
        ModalContent,
        RatingForm,
        InfoSection,
        ModalAvatar,
        RatingButton
 } from '../../components/Modal/ModalElements';
import IconRating from './IconRating';

const RatingModal = (props) => {
    
    return (
        <>
            <Modal trigger={props.trigger} setTrigger={props.setTrigger}>
                <ModalContent>
                    <ModalH2>Avaliação</ModalH2>
                    <InfoSection>
                        <ModalAvatar src={props.imgavatar} />
                    </InfoSection>
                    <RatingForm method="get" onSubmit={props.submit}>
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
