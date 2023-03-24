import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 40rem;

  justify-content: space-between;
  padding: 5rem;
  :hover {
    h4 {
      opacity: 1;
      transition: 1.5s;
      transform: scale(2);
    }
  }
  @media screen and (min-width: 767px) {
    height: 50rem;
    padding: 3rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  @media screen and (min-width: 320px) {
    opacity: 0;
  }
  @media screen and (min-width: 767px) {
    opacity: 1;
    img {
      height: 20rem;
      width: 20rem;
    }
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  @media screen and (min-width: 676px) {
    padding-left: 5rem;
  }
  @media screen and (min-width: 1024px) {
    padding-right: 5rem;
  }
`;
export const MainTitle = styled.h1`
  text-transform: uppercase;
  color: #056ed7fa;
  @media screen and (min-width: 320px) {
    font-size: 10vw;
  }
  @media screen and (min-width: 767px) {
    font-size: 5vw;
  }
`;
export const SubTitle = styled.h2`
  /* text-transform: uppercase; */
  @media screen and (min-width: 320px) {
    font-size: 7vw;
  }
  @media screen and (min-width: 767px) {
    font-size: 4vw;
  }
`;
export const Special = styled.h4`
  padding-top: 2rem;
  font-size: 4vw;
  text-transform: uppercase;
  color: #fad71e;
  opacity: 0;
  @media screen and (min-width: 320px) {
    font-size: 4vw;
  }
  @media screen and (min-width: 767px) {
    font-size: 5vw;
  }
`;
export const Image1 = styled.div`
  position: absolute;
  @media screen and (min-width: 767px) {
    top: 2rem;
  }

  /* z-index: 9; */
`;
export const Image2 = styled.div`
  position: absolute;
  @media screen and (min-width: 767px) {
    top: 20rem;
    left: 3rem;
  }
`;
export const Image3 = styled.div`
  position: absolute;
  @media screen and (min-width: 767px) {
    top: 4rem;
    left: 14rem;
  }
`;
export const Image4 = styled.div`
  position: absolute;
  @media screen and (min-width: 767px) {
    top: 13rem;
    left: 1rem;
  }
`;
