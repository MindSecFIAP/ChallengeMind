import {ModalContainer, 
        ModalWrapper,
        CloseButton,
        Icon} from './ModalElements'

export function Modal(props) {
  return props.trigger ? (
    <>
      <ModalContainer>
        <ModalWrapper>
            <CloseButton onClick={() => props.setTrigger(false)}>
              <Icon/>
            </CloseButton>
            {props.children}
        </ModalWrapper>
      </ModalContainer>
    </>
  ) : (
    ""
  );
}
