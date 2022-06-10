import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (min-width: 769px) {
    gap: 16px;
  }
`;

export const Tag = styled.p`
  display: inline;
  background-color: ${(props) => props.theme.colors.neutral[200]};
  padding: 5px 10px;
  border-radius: 4px;

  color: ${(props) => props.theme.colors.neutral[400]};
  font-weight: 400;

  font-size: 14px;
  line-height: 150%;

  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 150%;
    padding: 6px 14px;
  }
`;
