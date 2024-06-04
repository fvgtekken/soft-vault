import styled from 'styled-components';
import Demo from "../../../public/demo.svg";
import { titleFont, panelFont } from '../../app/config/fonts';

/*Panel Design*/ 
interface StyledPanelProps {
  $urlimg?: string; // urlImg es opcional y es una cadena de texto
}

export const StyledPanel = styled.div<StyledPanelProps>`
  margin-top:5rem;
  width: 376px;
  height: 223px;
  background-image:  url(${props => props.$urlimg || Demo.src});
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;


/*Panel Title Home*/ 
interface StyledTitleProps {
  width?: string; // width es opcional y es una cadena de texto
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  position:relative;
  left:-15px;
  top:-18px;
  width: ${({ width }) => width || '150px'};
  font-size: 1.2rem;
  text-align: center;
  color: white;
  font-family: ${titleFont.style.fontFamily};
`;

/*Panel Text*/ 
interface StyledPanelText {
  width?: string; 
  opacity?:string;
}

export const StyledPanelText = styled.div<StyledPanelText>`
    position:relative;
    top:-5px;
    left:-15px;
    width:${({ width }) => width || '300px'};
    height:180px;
    text-align: center;
    font-family: ${panelFont.style.fontFamily};
    color: white;
    font-size:1rem;
    opacity:${({ opacity }) => opacity || '0.3'};
`;

/*Icon Panel Design*/ 
export const StyledContainerIcon = styled.div`
    position:relative;
    left:-10px;
    top:-25px;
`;

//border: 1px solid white; 