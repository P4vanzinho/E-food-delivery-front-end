"use client";

import { Container } from "./styles";
import ProductList from "../ProductList";
import Title from "../Title";
import useMocks from "@/mocks/mock";
import React from "react";
type CategoryListProps = {
  mode?: "private" | "public";
};

export default function CategoryList({ mode = "public" }: CategoryListProps) {
  const { categories } = useMocks();
  return (
    <Container>
      {!!categories?.length &&
        categories.map((category, index) => (
          <React.Fragment key={index}>
            <Title>{category.name}</Title>
            <ProductList mode={mode} category={category} />
          </React.Fragment>
        ))}
    </Container>
  );
}
