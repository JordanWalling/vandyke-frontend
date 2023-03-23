import styled from "styled-components";

export const Background = styled.div`
  background-color: #056ed7fa;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const Card = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  background-color: #fff;
  border-radius: 2rem;
`;

export const Title = styled.h4`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 300;
  color: #056ed7fa;
  letter-spacing: 0.25rem;
  margin: auto;
  padding-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  letter-spacing: 0.25rem;
`;
