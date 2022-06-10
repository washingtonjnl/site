import React, { ReactNode } from "react";

import { Container } from "./styles";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
