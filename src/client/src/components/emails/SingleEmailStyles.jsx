import styled from "styled-components";

export const HideFullMessage = styled.p`
  width: 50px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const MainHeading = styled.h2`
  font-size: 10vw;
  display: flex;
  justify-content: center;
`;
export const Heading = styled.h4`
  font-size: 8vw;
  font-weight: 700;
`;
export const SubSize = styled.h4`
  font-size: 3vw;
`;
export const Container = styled.div`
  border: 2px solid red;
  border-radius: 1vw;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100vw;

  align-content: center;
  justify-content: center;
  height: 25vh;
  padding-bottom: 2vh;
`;
