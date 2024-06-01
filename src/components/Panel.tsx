'use client';
import Image from "next/image";
import Demo from "../../public/demo.svg";
import IconTech from "../../public/iconTech1.svg";

import { StyledPanel,StyledContainerIcon, StyledTitle, StyledPanelText } from "@/styleComponents/home/styles";


export interface PropsPanel {
    urlPanelDesing?: string;
    srcIcon? :string;
    widthTitle? :string;
    widthText?:string;
    opacityText?:string;
    titleText:string;
    mainText:string;
}

export default function Panels({urlPanelDesing, srcIcon, widthTitle, widthText, opacityText , titleText , mainText}:PropsPanel) {
  
  return (
        <StyledPanel  urlimg={urlPanelDesing || Demo.src }> 
          <StyledContainerIcon>
            <Image src={srcIcon || IconTech} alt={"Icon Tech"} width={50} height={50} />
          </StyledContainerIcon>
            <StyledTitle width={widthTitle}>{titleText}</StyledTitle>
              <StyledPanelText opacity={opacityText}  width={widthText}> 
                {mainText}
            </StyledPanelText>
        </StyledPanel>
  );
}


