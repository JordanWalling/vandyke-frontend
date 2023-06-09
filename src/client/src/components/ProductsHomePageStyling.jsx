import styled from "styled-components";

export const Card = styled.div`
  width: 80%;
  padding: 2rem;
  max-width: 300px;
  background-color: #fff;
  border-radius: 2rem;
  img {
    height: 15rem;
  }
  button {
    padding: 0.5rem;
  }
  :hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
  @media screen and (min-width: 400px) {
    img {
      height: 20rem;
    }
    button {
      padding: 1rem;
    }
  }
`;

export const CardContainer = styled.div`
  background-color: #056ed7fa;
  display: flex;
  padding: 5rem 0;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const Background = styled.div`
  background-color: #056ed7fa;
`;
export const Button = styled.button`
  background-color: #056ed7fa;
  color: #fff;
  border-radius: 0.75rem;
  :hover {
    background-color: #fff;
    color: #056ed7fa;
    transition: 0.5s;
  }
`;
export const Heading = styled.h3`
  text-align: center;
  font-size: 3.5rem;
  background-color: #056ed7fa;
  margin: auto;
  padding-top: 2rem;
  color: #fff;
  @media screen and (min-width: 767px) {
    font-size: 5rem;
    padding-top: 2.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 6rem;
    padding-top: 2.5rem;
  }
`;
export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: auto;
  h4 {
    padding-top: 1rem;
    font-size: 1.75rem;
    color: #056ed7fa;
  }
  p {
    letter-spacing: 0.15rem;
    line-height: 1.2;
  }
`;
