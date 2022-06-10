import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 32px auto;

  @media (min-width: 769px) {
    max-width: 840px;
    margin: 64px auto;
    padding: 0 16px;
    gap: 32px;
  }
`;

export const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 8px;

  @media (min-width: 769px) {
    margin-bottom: 16px;
  }
`;
