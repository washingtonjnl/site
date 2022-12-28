import Link from "next/link";
import React from "react";

import { Container, Navigation, NavButton } from "./styles";

export type Props = {
  side?: "center" | "left";
};

export const Header = ({ side }: Props) => {
  return (
    <Container>
      <Navigation side={side}>
        <Link href="/">
          <NavButton>Home</NavButton>
        </Link>
        <Link href="/sobre">
          <NavButton>Sobre mim</NavButton>
        </Link>
        <NavButton href="/curriculo_washington_junior.pdf" target="_blank">
          Currículo
        </NavButton>
      </Navigation>
    </Container>
  );
};
