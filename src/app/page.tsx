'use client';
import Panels, { PropsPanles } from "@/components/Panels";
import IconTech from "../../public/iconTech1.svg";
import Demo from "../../public/demo.svg";
import { StyledContainer } from "@/styleComponents/home/styles";


const dataPanels:PropsPanles[] = [{
   urlPanelDesing: Demo.src,
   srcIcon :IconTech,
   widthTitle :"200px",
   opacityText:"1",
   titleText: `Understanding needs`,
   mainText:`We identify who has the problem
                or need and provide a detailed
                description of what
                the problem entails`,
  }, {
   urlPanelDesing: Demo.src,
   srcIcon :IconTech,
   widthTitle :"200px",
   opacityText:"0.5",
   titleText: `Identifying opportunities`,
   mainText:`Lorem Ipsum is simply dummy text
of the printin and typesetting
industry. Lorem Ipsum has
been the industry's standard...`,
  },
 {
   urlPanelDesing: Demo.src,
   srcIcon :IconTech,
   widthTitle :"250px",
   opacityText:"0.5",
   titleText: `Developing customized solutions`,
   mainText:`Lorem Ipsum is simply dummy text
of the printin and typesetting
industry. Lorem Ipsum has
been the industry's standard...`,
  }]

export default function Home() {
  
  return ( 
        <>
        <StyledContainer>
             {dataPanels.map((propsPanel:PropsPanles, index:number)=>(<Panels key={index} {...propsPanel} />))}
          </StyledContainer> 
        </>
  );
}