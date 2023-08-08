import styled from 'styled-components';

export const DropDownBox = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    max-height: 100vh;
  }
`;
