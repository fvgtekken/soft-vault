'use client';
import Image from "next/image";
import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`;


export default function Home() {
  return (
    <Container>
       <div>
          Hello 1!
      </div>
       <div>
          Hello 2!
      </div>
       <div>
          Hello 2!
      </div>
    </Container>
  );
}
