"use client";

import { Container } from "./styles";

import CategoryList from "@/app/components/CategoryList";

export default function Products() {
  return (
    <Container>
      <CategoryList mode="private" />
    </Container>
  );
}
