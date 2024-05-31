'use client';
import Panels, { PropsPanles } from "@/components/Panels";
import { StyledContainer } from "@/styleComponents/home/styles";
import { dataPanels } from "@/utils/data";

export default function Home() {
  return ( 
        <>
        <StyledContainer>
             {dataPanels.map((propsPanel:PropsPanles, index:number)=>(<Panels key={index} {...propsPanel} />))}
          </StyledContainer> 
        </>
  );
}