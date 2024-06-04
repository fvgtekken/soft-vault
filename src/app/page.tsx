'use client';
import Panel, { PropsPanel } from "@/components/Panel";
import { StyledContainer } from "@/styleComponents/app/page";
import { dataPanels } from "@/utils/data";

export default function Home() {
  return ( 
        <>
        <StyledContainer >
             {dataPanels.map((propsPanel:PropsPanel, index:number)=>(<Panel key={index} {...propsPanel} />))}
        </StyledContainer> 
        </>
  );
}