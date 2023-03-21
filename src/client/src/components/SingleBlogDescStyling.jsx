import styled from "styled-components";

export const Background = styled.div`
  background-color: #056ed7fa;
  height: 100vh;
  position: relative;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  background-color: #fff;
  position: absolute;
  top: 10%;
  border-radius: 1rem;
  margin: 2rem;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  img {
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;
export const Title = styled.h3`
  font-size: 5rem;
  text-transform: uppercase;
`;
export const Paragraph = styled.p`
  font-size: 2rem;
  letter-spacing: 2px;
`;
