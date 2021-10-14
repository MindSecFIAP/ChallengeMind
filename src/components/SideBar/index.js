import React from 'react'
import {SideBarContainer} from './SideBarElements'

const SideBar = (props) => {
    return (
        <>
            <SideBarContainer>
                {props.children}
            </SideBarContainer>
        </>
    )
}

export default SideBar
