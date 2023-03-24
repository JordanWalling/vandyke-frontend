import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  background-color: #056ed7fa;
  padding-bottom: 5rem;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  width: 50%;
  border-radius: 10px;
  box-shadow: 1px 2px 3px solid #fff;
  max-width: 872px;
  background-color: #fff;
  @media screen and (min-width: 320px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
  }
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
  font-size: 8rem;
  display: flex;
  justify-content: center;
  color: #fff;
  @media screen and (min-width: 320px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 7rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 9rem;
  }
`;
export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  padding: 20px 5px;
  border-radius: 10px;
`;

export const FormItem = styled.div`
  /* padding-bottom:; */
  display: inline-block;
  input {
    width: 100%;
    height: 3vh;
    font-size: 1.5rem;
    padding-left: 0.5rem;
    :hover {
      background-color: #f1eeee;
      font-weight: 600;
    }
    @media screen and (min-width: 320px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 767px) {
      font-size: 1.25rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
  textarea {
    width: 100%;
    height: 10rem;
    font-size: 1.5rem;
    padding-left: 0.5rem;

    :hover {
      background-color: #f1eeee;
      font-weight: 600;
    }
    @media screen and (min-width: 320px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 767px) {
      font-size: 1.25rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;
export const Label = styled.label`
  font-weight: 800;
  padding-right: 2vh;
  font-size: 1.75rem;
  margin: 0;
  @media screen and (min-width: 320px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 767px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;
export const SubHeading = styled.h3`
  font-weight: 800;
  padding-bottom: 3vh;
  font-size: 3rem;
  color: #056ed7fa;
  margin: auto;
  @media screen and (min-width: 320px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 767px) {
    font-size: 2.25rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const ContactUsButton = styled.button`
  display: flex;
  height: 3vh;
  width: 10vw;
  margin: auto;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: #056ed7fa;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  :hover {
    background-color: #fff;
    color: #056ed7fa;
    transition: 0.5s;
  }
  @media screen and (min-width: 320px) {
    width: 25vw;
  }
  @media screen and (min-width: 767px) {
    width: 20vw;
  }
  @media screen and (min-width: 1024px) {
    width: 18vw;
  }
`;
