import styled from "styled-components";
import img from "../assets/blog-hero.jpg";

export const HeroContainer = styled.div`
  height: 40vh;
  width: auto;
  display: flex;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${img});
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 2rem;
`;

export const Title = styled.h4`
  font-size: 4rem;
  padding: 1rem 0;
  color: grey;
`;
export const MainHeading = styled.h1`
  font-size: 5rem;
  padding: 1rem 0;
`;

export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  padding: 1rem 0;
  overflow: hidden;
  border-radius: 2.5rem;
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 3rem;
  width: 80%;
  margin: auto;
`;

export const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border: 2px solid grey;
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 2px #cdcbcb;
  p {
    display: none;
    padding: 0 2rem;
  }
  div {
    background-color: #fff;
  }
`;

export const BlogsPage = styled.div`
  background-color: #e8f7f8;
`;
