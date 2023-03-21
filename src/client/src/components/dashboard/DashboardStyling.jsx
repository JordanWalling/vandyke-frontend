import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid blue;
  border-radius: 0.75rem;
  padding: 1rem;
  background-color: #045cac;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.25;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  padding: 1rem;
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
