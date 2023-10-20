import styled, { css } from "styled-components";

export const StyledTabContent = styled.div`
  background-color: #edf2ff;
  padding: 32px;
  border-radius: 12px;
  h4 {
    font-size: 20px;
    margin-bottom: 16px;
    color: #364fc7;
  }
  p {
    font-size: 18px;
  }
`;

export const StyledTabUndo = styled.div`
  display: flex;
  gap: 8px;
  button {
    background-color: #364fc7;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
  }
`;

export const StyledHeartsCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    background-color: #f03e3e;
    padding: 4px 6px;
    border-radius: 4px;
    color: #fff;
    line-height: 1;
  }
`;

export const StyledTabActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;
  & > button {
    background: none;
    text-decoration: underline;
    color: #4c6ef5;
    font-size: 14px;
  }
`;
export const Button = styled.button`
  color: inherit;
  font-family: inherit;
  border: none;
  cursor: pointer;
`;

interface StyledTabProps {
  $isActive: boolean;
}
export const StyledTabButton = styled(Button)<StyledTabProps>`
  border-radius: 12px;
  padding: 12px 24px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;

  ${(props) =>
    props.$isActive
      ? css`
          background-color: #364fc7;
          color: #fff;
        `
      : css`
          background-color: #edf2ff;
          color: #364fc7;
        `}
`;

export const TabsContainer = styled.div`
  margin-bottom: 8px;
`;
