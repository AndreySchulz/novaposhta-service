import styled from 'styled-components';
import { device } from '../../stylesheet/breakpoints';

export const MainBox = styled.section`
  display: flex;
`;
export const MainInfo = styled.section`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;
