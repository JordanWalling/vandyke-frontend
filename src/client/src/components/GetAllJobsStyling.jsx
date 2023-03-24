import styled from "styled-components";

export const Background = styled.div`
  background-color: #056ed7fa;
  padding: 2rem;
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  list-style-type: none;
`;
export const Li = styled.li`
  display: flex;
  background-color: #fff;
  width: 90%;
  margin: auto;
  align-items: center;
  max-width: 30rem;
  padding: 1rem;
  padding-top: 2rem;
  border: 1px solid grey;
  align-items: center;
  border-radius: 1rem;
  button {
    margin-top: 1rem;
    width: 12rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #056ed7fa;

    a {
      color: #fff;
      text-decoration: none;
    }
    :hover {
      background-color: #fff;
      a {
        color: #056ed7fa;
      }
      transition: 0.5s;
    }
  }
`;
