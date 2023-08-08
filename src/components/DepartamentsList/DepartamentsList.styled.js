import styled from 'styled-components';
import { device } from '../../stylesheet/breakpoints';

export const DepartamentBox = styled.ul`
  @media ${device.desktop} {
    padding: 20px 0;
  }
`;

export const DepartamentItem = styled.li`
  margin-bottom: 10px;
  padding: 5px;
  background: #80808017;

  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DropDownBox = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    max-height: 100vh;
  }
`;
