"use client";

import { Container } from "./styles";

type SearchProductProps = {
  params: {
    slug: string;
  };
};

export default function SearchProduct({ params }: SearchProductProps) {
  return <Container>buscar {params.slug}</Container>;
}
