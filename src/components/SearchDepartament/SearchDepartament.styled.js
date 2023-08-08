import styled from 'styled-components';
import { Form, Field } from 'formik';
import { device } from '../../stylesheet/breakpoints';

export const FormBox = styled(Form)`
  position: relative;
  width: 100%;
  
  margin-bottom: 10px;
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
`;
export const FieldForm = styled(Field)`
  width: 100%;
  border: 1px solid #0000002e;
  border-radius: 5px;
  padding: 5px 20px;
  margin-bottom: 10px;

  @media ${device.desktop} {
    width: 200px;
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
export const FormBtn = styled.button`
  padding: 5px 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px #a7a7a7;
  width: 100%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #ff392e;
    color: #fff;
  }

  @media ${device.desktop} {
    width: 200px;
    margin-right: 20px;
    margin-bottom: 0px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
export const NavigateBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  @media ${device.desktop} {
    display: block;
    padding: 0;
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  bottom: -5px;
`;
