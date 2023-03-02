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
`;

export const GridBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  border: 2px solid red;
  display: grid;
  width: 90%;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
export const Card = styled.div`
  height: 30rem;
  border: 2px solid purple;
  padding: 1rem 0;
  overflow: hidden;
  border-radius: 1rem;
`;
export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  padding: 1rem 0;
  overflow: hidden;
  border-radius: 2.5rem;
`;
