import styled from "styled-components";

export const Background = styled.div`
  background-color: #056ed7fa;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-top: 5rem;
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 2rem;
  padding: 2rem 0;
  width: 80%;

  margin: auto;
  max-width: 500px;
`;

export const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1rem;
  padding-bottom: 2rem;
`;
export const Label = styled.label`
  font-size: 2rem;
`;
export const Input = styled.input`
  width: 95%;
  height: 5vh;
  font-size: 2vh;
  padding-left: 1rem;
`;
export const Textarea = styled.textarea`
  width: 95%;
  height: 20vh;
  font-size: 2vh;
  padding-left: 1rem;
  padding-top: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 4rem;
  padding-bottom: 2rem;
  padding-left: 18%;
  color: #056ed7fa;
`;
export const Button = styled.button`
  font-size: 2rem;
  text-transform: uppercase;
  background-color: #056ed7fa;
  width: 30%;
  margin: auto;
  color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  :hover {
    color: #056ed7fa;
    background-color: #fff;
    transition: 0.5s;
  }
`;
export const Select = styled.select`
  width: 30%;
  height: 4vh;
`;

export const ImageButton = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #056ed7fa;
  width: 30%;
  margin: auto;
  color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  :hover {
    color: #056ed7fa;
    background-color: #fff;
    transition: 0.5s;
  }
`;
