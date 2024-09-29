"use client";

import Title from "@/app/components/Title";
import {
  Container,
  SubTotalContainer,
  Footer,
  PriceContainer,
  RequestsContainer,
} from "./styles";
import { useBagContext } from "@/context/bag";
import Button from "@/app/components/Button";
import { poppins } from "@/app/fonts";
import BagItem from "@/app/components/BagItem";
import { useRouter } from "next/navigation";
import { useOrderContext } from "@/context/order";
import Price from "@/app/components/Price";

type BagProps = {
  params: {
    slug: string;
  };
};

export default function Bag({ params }: BagProps) {
  const { setCurrentOrder } = useOrderContext();
  const { itens: items, total } = useBagContext();

  const router = useRouter();

  const addItemOnClick = () => {
    router.push(`/${params.slug}`);
  };

  const paymentMethodButtonOnClick = () => {
    const route = `/${params?.slug}/checkout/entrega/alterar`;

    const orderItems = items.map((item) => ({
      price: item.unityPrice,
      productId: item.productId,
      qty: item.qty,
    }));

    setCurrentOrder({
      businessId: params.slug,
      items: orderItems,
    });

    router.push(route);
  };

  return (
    <Container>
      <Title>Sacola</Title>
      <RequestsContainer>
        {items.map((item) => (
          <BagItem key={item.id} item={item} />
        ))}
      </RequestsContainer>

      <Footer>
        <div>
          <button className={poppins.className} onClick={addItemOnClick}>
            <span>Adicionar mais produtos</span>
          </button>
        </div>
        <SubTotalContainer className={poppins.className}>
          <span>Subtotal</span>

          <PriceContainer>
            <Price>{total}</Price>
          </PriceContainer>
        </SubTotalContainer>

        <Button
          className={poppins.className}
          disabled={!total}
          text="Fechar pedido"
          onClick={paymentMethodButtonOnClick}
        />
      </Footer>
    </Container>
  );
}
