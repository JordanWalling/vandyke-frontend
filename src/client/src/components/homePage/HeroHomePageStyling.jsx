import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 50rem;
  /* border: 2px solid red; */
  justify-content: space-between;
  padding: 5rem;
  :hover {
    h4 {
      opacity: 1;
      transition: 1.5s;
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  img {
    height: 20rem;
    width: 20rem;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;
export const MainTitle = styled.h1`
  font-size: 6vw;
  text-transform: uppercase;
  color: #056ed7fa;
`;
export const SubTitle = styled.h2`
  font-size: 4vw;
  text-transform: uppercase;
`;
export const Special = styled.h4`
  padding-top: 2rem;
  font-size: 4vw;
  text-transform: uppercase;
  color: #fad71e;
  opacity: 0;
`;
export const Image1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 2rem;
  /* z-index: 9; */
`;
export const Image2 = styled.div`
  position: absolute;
  top: 25rem;
  left: 8rem;
`;
export const Image3 = styled.div`
  position: absolute;
  left: 21rem;
  top: 6rem;
`;
export const Image4 = styled.div`
  position: absolute;
  top: 18rem;
  left: 3rem;
`;
