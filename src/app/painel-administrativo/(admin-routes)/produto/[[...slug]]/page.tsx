"use client";

import { Container } from "./styles";

import ProductPage from "@/app/components/ProductPage";

type ProductProps = {
  params: {
    slug: string;
    productId: string;
  };
  mode?: "private" | "public";
};

export default function Product(props: ProductProps) {
  const modePage = props?.params?.slug ? "edit" : "register";

  return (
    <Container>
      <ProductPage modePage={modePage} productId={props?.params?.slug} />
    </Container>
  );
}
