import React from "react";

import { Container, Tag } from "./styles";

export type Props = {
  tags: string[];
};

export const Tags = ({ tags }: Props) => {
  return (
    <Container>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Container>
  );
};
