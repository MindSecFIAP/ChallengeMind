import React from 'react'
import {SideBarContainer} from './SideBarElements'

const SideBar = (props) => {

    return (
        <>
            <SideBarContainer isOpen={props.isOpen}>
                {props.children}
            </SideBarContainer>
        </>
    )
}

export default SideBar
