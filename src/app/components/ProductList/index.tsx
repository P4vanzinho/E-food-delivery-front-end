import { StaticImageData } from "next/image";
import ProductCard from "../ProductCard";
import { Container } from "./styles";

type ProductList = {
  mode: "private" | "public";
  category: {
    name: string;
    products: {
      name: string;
      upload: StaticImageData;
      slug: string;
      price: string;
      description: string;
    }[];
  };
};

export default function ProductList({ mode, category }: ProductList) {
  const products = category.products;

  return (
    <Container>
      {!!products?.length &&
        products.map((product, index) => (
          <ProductCard key={index} data={product} mode={mode} />
        ))}
    </Container>
  );
}
