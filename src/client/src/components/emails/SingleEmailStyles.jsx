import styled from "styled-components";

// export const HideFullMessage = styled.p`
//   width: 50px;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// `;

export const Card = styled.div`
  background-color: #fff;
  border: 2px solid red;
`;
export const EmailInfo = styled.div``;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export const Message = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
// export const P = styled.p`
//   width: 50px;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// `;

export const Heading = styled.h4`
  display: flex;
  justify-content: center;
  h2 {
    font-size: 3rem;
    color: #056ed7fa;
    padding-bottom: 1rem;
  }
`;

export const Sub = styled.h4`
  font-size: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #056ed7fa;
  :hover {
    color: #056ed7fa;
    background-color: #fff;
  }
`;
