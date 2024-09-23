import ProductCard from "../ProductCard";
import { Container } from "./styles";
import useMocks from "@/mocks/mock";
type ProductList = {
  mode: "private" | "public";
};

export default function ProductList({ mode }: ProductList) {
  const { categories } = useMocks();

  const products = categories.flatMap(
    (category) => category.products.filter((product) => product) // Filtro para garantir que não há produtos nulos/indefinidos
  );

  return (
    <Container>
      {!!products?.length &&
        products.map((product, index) => (
          <ProductCard key={index} data={product} mode={mode} />
        ))}
    </Container>
  );
}
