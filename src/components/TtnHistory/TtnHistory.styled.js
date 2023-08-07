import styled from 'styled-components';

export const TtnHistoryBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  min-height: 300px;

  padding: 20px;
  border: 1px solid #ff392e;
  border-radius: 5px;

  background: #80808017;
`;

export const TtnHistoryBoxHeader = styled.h2`
  margin-bottom: 10px;
`;

export const TtnHistoriList = styled.ul`
  margin-bottom: 10px;
`;

export const TtnItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    color: #ff392e;
  }
`;

export const ClearHistoryBtn = styled.button`
  position: absolute;
  bottom: 0;
  padding: 5px 20px;
  margin: 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px #a7a7a7;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: #ffff;
  &:hover {
    background: #ff392e;
    color: #fff;
  }
`;
