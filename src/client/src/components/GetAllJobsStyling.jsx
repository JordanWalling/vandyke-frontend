import styled from "styled-components";

export const Ul = styled.ul`
  @media screen and (max-width: 588px) {
    display: grid;
    grid-template-columns: 1fr;
    width: auto;
  }

  @media screen and (min-width: 589px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  list-style-type: none;
  justify-content: space-between;
  background-color: #f8f3ee;
`;
export const Li = styled.li`
  background-color: white;
  max-width: 20rem;
  padding: 2rem;
  border: 1px solid grey;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  :hover {
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  }
`;
