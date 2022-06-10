import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.neutral[500]};
  font-weight: 700;

  font-size: 24px;
  line-height: 130%;

  @media (min-width: 769px) {
    font-size: 28px;
    line-height: 130%;
  }
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.neutral[500]};
  font-weight: 700;

  font-size: 20px;
  line-height: 130%;

  @media (min-width: 769px) {
    font-size: 24px;
    line-height: 130%;
  }
`;

export const H2Light = styled.h2`
  color: ${(props) => props.theme.colors.neutral[400]};
  font-weight: 400;

  b {
    font-weight: 600;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.neutral[500]};
    }
  }

  font-size: 18px;
  line-height: 150%;

  @media (min-width: 769px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const Quote = styled.blockquote`
  color: ${(props) => props.theme.colors.neutral[400]};
  font-style: italic;
  background-color: ${(props) => props.theme.colors.neutral[200]};
  padding: 16px 16px 16px 24px;
  border-left: 4px solid ${(props) => props.theme.colors.neutral[400]};

  b {
    font-weight: 600;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.neutral[500]};
    }
  }

  font-size: 16px;
  line-height: 150%;

  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 170%;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.neutral[400]};

  b {
    font-weight: 600;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.neutral[500]};
    }
  }

  font-size: 16px;
  line-height: 150%;

  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 170%;
  }
`;

export const Caption = styled.caption`
  color: ${(props) => props.theme.colors.neutral[300]};
  font-style: italic;
  text-align: center;

  b {
    font-weight: 600;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.neutral[500]};
    }
  }

  font-size: 14px;
  line-height: 150%;
  margin-top: -8px;

  @media (min-width: 769px) {
    margin-top: -16px;
    font-size: 16px;
    line-height: 170%;
  }
`;

export const Signature = styled.p`
  font-family: ${(props) => props.theme.fonts.serif}, "Times New Roman", Times,
    serif;
  color: ${(props) => props.theme.colors.neutral[500]};

  font-size: 20px;
  line-height: 150%;

  @media (min-width: 769px) {
    font-size: 24px;
    line-height: 170%;
  }
`;
