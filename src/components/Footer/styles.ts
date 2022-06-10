import styled from "styled-components";

export const Container = styled.footer`
  padding: 24px 32px;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme.colors.neutral[300]};
  font-size: 14px;

  @media (min-width: 769px) {
    padding: 32px;
  }
`;
