import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 30%;
  flex-direction: row;

  @media (max-width: 1030px) {
    flex-direction: column; 
  }
`;
const BigContainer = styled.div`
  display: flex;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  flex: 0.5;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;
  font-size: 14px;
  gap: 20px;
  padding: 50px 30px;
  justify-content: center;
`;

const Heading = styled.h3`
  font-weight: 800;
  font-size: 24px;
`;

const Paragraph = styled.p`
  line-height: 1.4;
  color: hsl(0, 0%, 63%);
  font-weight: 600;
`;

const About: React.FC = () => {
  return (
    <Container>
      <BigContainer style={{
        flex: 1
      }}>
        <Image src="images/image-about-dark.jpg" alt="table-and-chairs" />
        <TextContainer >
          <Heading>ABOUT OUR FURNITURE</Heading>
          <Paragraph>
            Our multifunctional collection blends design and function to suit your
            individual taste. Make each room unique, or pick a cohesive theme that
            best expresses your interests and what inspires you. Find the furniture
            pieces you need, from traditional to contemporary styles or anything
            in between. Product specialists are available to help you create your
            dream space.
          </Paragraph>
        </TextContainer>
      </BigContainer>
      <Image style={{
        flex: 0.464
      }} src="images/image-about-light.jpg" alt="chairs" />
    </Container>
  );
};

export default About;
