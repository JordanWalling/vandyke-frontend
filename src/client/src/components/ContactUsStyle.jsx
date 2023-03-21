import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 140vh;
  background-color: #056ed7fa;
  position: relative;
`;
export const Container = styled.div`
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;

  width: 60vw;
  position: absolute;
  /* height: 80vh; */
  left: 20%;
  top: 25%;
  border-radius: 10px;
  box-shadow: 1px 2px 3px solid #fff;
  max-width: 872px;
  background-color: #fff;
`;

export const ContainerItem = styled.div`
  Iframe {
    width: 100%;
    height: 25vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const ContactUsHeading = styled.h1`
  font-size: 10vw;
  display: flex;
  justify-content: center;
  padding: 2vh 0;
  color: #fff;
`;
export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 5px;
  border-radius: 10px;
`;

export const FormItem = styled.div`
  padding-bottom: 2vh;
  display: inline-block;
  input {
    width: 100%;
    height: 3vh;
    font-size: 2vw;
    :hover {
      background-color: #f1eeee;
      font-weight: 600;
    }
  }
  textarea {
    width: 100%;
    height: 15vh;
    font-size: 2vw;
    :hover {
      background-color: #f1eeee;
      font-weight: 600;
    }
  }
`;
export const Label = styled.label`
  font-weight: 800;
  padding-right: 2vh;
  font-size: 3vw;
  margin: 0;
`;
export const SubHeading = styled.h3`
  font-weight: 800;
  padding-bottom: 3vh;
  font-size: 5vw;
  color: #056ed7fa;
  margin: auto;
`;

export const ContactUsButton = styled.button`
  display: flex;
  height: 3vh;
  width: 10vw;
  margin: auto;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  background-color: #056ed7fa;
  color: #fff;
  border-radius: 5px;
  :hover {
    background-color: #fff;
    color: #056ed7fa;
    transition: 0.5s;
  }
`;
