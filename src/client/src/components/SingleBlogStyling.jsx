import styled from "styled-components";

export const Container = styled.div`
  background-color: #e3edf7;
  padding-top: 5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  max-width: 600px;
  margin: auto;
`;
export const Box = styled.div`
  width: 90%;
  margin: auto;
  background-color: #fff;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

export const BlogDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  width: 90%;
  margin: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  p {
    overflow: hidden;
    max-width: 75ch;
    font-size: 1.5rem;
  }
`;
export const Title = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  color: #045cac;
  letter-spacing: 0.5rem;
  border-radius: 5px;
  background-color: #bcdcfa;

  margin: auto;
`;
