import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 32px auto;

  @media (min-width: 769px) {
    max-width: 840px;
    margin: 64px auto 32px;
    padding: 0 16px;
    gap: 32px;
  }
`;

export const Cover = styled.img`
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  object-position: center;
  height: 160px;

  @media (min-width: 769px) {
    height: 320px;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 8px;

  @media (min-width: 769px) {
    margin-bottom: 16px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    margin-bottom: -8px;
  }

  img {
    width: 100%;
    border-radius: 4px;
  }

  @media (min-width: 769px) {
    gap: 32px;

    h2 {
      margin-bottom: -16px;
    }

    img {
      width: 100%;
    }
  }
`;

export const List = styled.ul`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
