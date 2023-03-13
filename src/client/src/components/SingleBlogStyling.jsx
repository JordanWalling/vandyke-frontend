import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-content: center;
  margin: auto;
  border-radius: 2rem;
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

export const Card = styled.div`
  height: 30rem;
  border: 2px solid red;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 1.5rem;
  padding-bottom: 2rem;
`;
export const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
export const Title = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  color: #045cac;
  border: 2px solid blue;
  border-radius: 5px;
  background-color: #bcdcfa;
`;
