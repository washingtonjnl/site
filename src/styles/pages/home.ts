import styled from "styled-components";

export const Profile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 32px;

  img {
    width: 120px;
    border-radius: 50%;
  }

  @media (min-width: 769px) {
    align-items: center;
    max-width: 470px;
    margin: 64px auto auto;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 769px) {
    text-align: center;
  }
`;

export const ProfessionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 769px) {
    text-align: center;
  }
`;

export const SocialInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  p {
    transition: 0.2s;
    color: ${(props) => props.theme.colors.neutral[500]};
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (min-width: 769px) {
    grid-template-columns: 0.8fr 1fr;
    column-gap: 24px;
    row-gap: 16px;

    a:nth-of-type(2n) {
      p {
        justify-content: flex-start;
      }
    }
    a:nth-of-type(2n + 1) {
      p {
        justify-content: flex-end;
      }
    }
    a:hover {
      p {
        color: ${(props) => props.theme.colors.neutral[400]};
      }
    }
  }
`;
