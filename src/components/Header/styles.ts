import styled, { css } from "styled-components";

import { Props } from "./index";

export const Container = styled.header`
  padding: 16px 8px;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(5px);

  @media (min-width: 769px) {
    padding: 16px 32px;
  }
`;

export const Navigation = styled.nav<Props>`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 840px;

  ${(props) =>
    props.side === "center" &&
    css`
      justify-content: center;
    `}

  @media (min-width: 769px) {
    justify-content: center;

    ${(props) =>
      props.side === "left" &&
      css`
        justify-content: flex-start;
      `}
  }
`;

export const NavButton = styled.a`
  padding: 16px;
  cursor: pointer;
  transition: 0.2s;

  color: ${(props) => props.theme.colors.neutral[400]};
  border-radius: 4px;

  &:hover {
    color: ${(props) => props.theme.colors.neutral[500]};
    text-shadow: 0.1px 0px 0px ${(props) => props.theme.colors.neutral[500]},
      -0.1px 0px 0px ${(props) => props.theme.colors.neutral[500]};
  }
`;
