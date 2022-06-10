import React, { ReactNode } from "react";

import { Container } from "./styles";

type Props = {
  children?: ReactNode;
};

export const Main = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
