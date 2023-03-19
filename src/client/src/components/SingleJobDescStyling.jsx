import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid red;
  text-align: center;
  padding-top: 2rem;
  span {
    padding-right: 1rem;
  }
  button {
    font-size: 2rem;
    padding: 0 1rem;
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
`;

export const Button = styled.button`
  margin: auto;
`;
