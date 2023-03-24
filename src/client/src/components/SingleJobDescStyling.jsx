import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  background-color: #fff;
  text-align: center;
  padding-top: 2rem;
  span {
    padding-right: 1rem;
  }
  button {
    font-size: 2rem;
    padding: 0 1rem;
    background-color: #056ed7fa;
    color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    :hover {
      background-color: #fff;
      color: #056ed7fa;
      transition: 0.5s;
    }
  }
`;
export const Job = styled.div`
  padding-bottom: 1rem;
  h1 {
    font-size: 5rem;
    color: #045cac;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
`;

export const JobItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  h3 {
    padding-right: 3rem;
  }
`;

export const Button = styled.button`
  margin: auto;
  color: #fff;
  background-color: #056ed7fa;
`;
export const Background = styled.div`
  background-color: #056ed7fa;
  height: 100vh;
  padding: 5rem;
`;
