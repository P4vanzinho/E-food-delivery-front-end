"use client";

import foodImg from "../../../../../public/foodImg.png";
import {
  Container,
  Content,
  QtyInputContainer,
  SubTotalContainer,
  Footer,
  TitleAndDescriptionContainer,
} from "./styles";
import Image from "next/image";
import Title from "@/app/components/Title";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import InputQty from "@/app/components/InputQty";
import { useState } from "react";
import Price from "@/app/components/Price";
import { useBagContext } from "@/context/bag";
import { useRouter } from "next/navigation";
import { poppins } from "@/app/fonts";
import useMocks from "@/mocks/mock";

type ProductProps = {
  params: {
    slug: string;
    productId: string;
  };
};

export default function Product(props: ProductProps) {
  const [qty, setQty] = useState(0);
  const { addItem } = useBagContext();
  const router = useRouter();
  const { product } = useMocks();

  const inputQtyCallback = (value: number) => {
    setQty(value);
  };

  const subTotal = product?.price ? qty * Number(product.price) : 0;

  const buttonOnClick = () => {
    const item = {
      productId: product?.id as number,
      qty,
      unityPrice: Number(product?.price),
      photo: product?.upload?.url,
      title: product?.name as string,
    };

    addItem(item);

    router.push(`/${props.params.slug}/sacola`);
  };

  return (
    <Container>
      {!!product && (
        <>
          <Image
            width={265}
            height={230}
            sizes="100vw"
            src={foodImg}
            alt={`${product.slug} image`}
          />

          <QtyInputContainer>
            <InputQty callback={inputQtyCallback} initialValue={qty} />
          </QtyInputContainer>

          <Content>
            <TitleAndDescriptionContainer>
              <div>
                <Title>{product.name}</Title>
              </div>

              <Text>{product.description}</Text>
            </TitleAndDescriptionContainer>

            <Footer className={poppins.className}>
              <SubTotalContainer>
                <span>Subtotal</span>

                <Price>{subTotal}</Price>
              </SubTotalContainer>

              <Button
                disabled={!qty}
                text="ADICIONAR À SACOLA"
                onClick={buttonOnClick}
              />
            </Footer>
          </Content>
        </>
      )}
    </Container>
  );
}
