import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  list-style-type: none;
`;
export const Li = styled.li`
  display: flex;
  background-color: white;
  width: 90%;
  margin: auto;
  align-items: center;
  max-width: 20rem;
  padding: 1rem;
  border: 1px solid grey;
  align-items: center;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  :hover {
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  }
`;
