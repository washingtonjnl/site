import React, { ReactNode } from "react";

import {
  H1,
  H2,
  H2Light,
  Quote,
  Paragraph,
  Caption,
  Signature,
} from "./styles";

export type Props = {
  hierarchy?:
    | "h1"
    | "h2"
    | "h2-light"
    | "quote"
    | "p"
    | "caption"
    | "signature";
  children?: ReactNode;
};

export const Type = ({ hierarchy = "p", children }: Props) => {
  switch (hierarchy) {
    case "h1":
      return <H1>{children}</H1>;
    case "h2":
      return <H2>{children}</H2>;
    case "h2-light":
      return <H2Light>{children}</H2Light>;
    case "quote":
      return <Quote>{children}</Quote>;
    case "p":
      return <Paragraph>{children}</Paragraph>;
    case "caption":
      return <Caption>{children}</Caption>;
    case "signature":
      return <Signature>{children}</Signature>;
    default:
      return <Paragraph>{children}</Paragraph>;
  }
};
