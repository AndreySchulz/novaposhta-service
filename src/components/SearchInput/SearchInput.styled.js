import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  position: relative;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
`;

export const FieldForm = styled(Field)`
  margin-right: 20px;
  border: 1px solid #0000002e;
  border-radius: 5px;
  padding: 5px 20px;
`;
export const FormBtn = styled.button`
  padding: 5px 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px #a7a7a7;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #ff392e;
    color: #fff;
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  bottom: -5px;
`;
