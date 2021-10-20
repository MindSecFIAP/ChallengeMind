import { useState } from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa'
import {GoAlert} from 'react-icons/go'
import {Color} from '../Global/Color'

const AllIcons = styled.span`
    font-size: 40px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    &:hover{
        cursor: pointer;
    }
`

function IconRating(props) {
  const icons = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
 
  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = () => {
    setHoverValue(hoverValue)
  }
  
  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <AllIcons>
      {icons.map((_, index) => {
          return (props.icon == 'star' ?
                  <FaStar key={index} 
                          size={24} 
                          style={{marginRight: 10, cursor:"pointer"}} 
                          color={(hoverValue || currentValue) > index ? Color.darkyellow : "#a9a9a9"} 
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index +1)}
                          onMouseLeave={handleMouseLeave}
                          name="star"
                          value={index} 
                          /> 

                  :

                  <GoAlert key={index} 
                          size={24} 
                          style={{marginRight: 10, cursor:"pointer"}} 
                          color={(hoverValue || currentValue) > index ? Color.darkyellow : "#a9a9a9"} 
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index +1)}
                          onMouseLeave={handleMouseLeave}
                          name="alert"
                          value={index} 
                          />
                )  
      })}
    </AllIcons>
  );
}
export default IconRating;