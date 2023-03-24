import styled from "styled-components";

export const Background = styled.div`
  background-color: #056ed7fa;
  height: 200vh;
  padding-top: 3rem;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  background-color: #fff;
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
    height: 100%;
    margin: auto;
    padding-bottom: 1rem;
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
  font-size: 2rem;
  text-transform: capitalize;
  @media screen and (min-width: 767px) {
    font-size: 3rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.5rem;
  letter-spacing: 2px;
  @media screen and (min-width: 767px) {
    font-size: 2rem;
  }
`;
