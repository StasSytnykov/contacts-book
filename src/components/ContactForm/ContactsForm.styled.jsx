import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 15px 5px #c3ffb0;

  margin: 0 auto;
  width: min-content;
  background-color: #12121236;

  padding: 30px 20px;

  border-radius: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin-top: 5px;
  border-radius: 6px;
  outline: none;
  padding: 5px 20px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  border-radius: 6px;
  display: block;
  border: none;
  color: white;
  background-color: green;
  padding: 10px 20px;
  font-weight: 700;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #09ad09;
  }
`;
