import { Item, useBagContext } from "@/context/bag";
import foodImg from "../../../../public/foodImg.png";
import { useEffect, useRef, useState } from "react";
import {
  Actions,
  Body,
  Container,
  InputWrapper,
  PhotoFood,
  QtyInputContainer,
  PriceContainer,
} from "./styles";
import Price from "../Price";
import { poppins } from "@/app/fonts";
import trash from "../../../../public/trash.png";
import Image from "next/image";

// import foward from "../../../../public/foward.svg";
// import backward from "../../../../public/backward.svg";
import InputQty from "../InputQty";
type BagItemProps = {
  item: Item;
};

export default function BagItem({ item }: BagItemProps) {
  const { editItem, removeItem } = useBagContext();
  const inputRef = useRef<HTMLInputElement>(null);
  // const [inputValue] = useState(item.qty);
  const [qty, setQty] = useState(item.qty);
  const inputQtyCallback = (value: number) => {
    setQty(value);
  };
  // const isSubtractDisabled = inputValue <= 1;

  useEffect(() => {
    editItem({
      ...item,
      qty: qty,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  // const buttonOnClick = (mode: "add" | "subtract") => {
  //   setInputValue((current) =>
  //     mode === "subtract" && current > 1 ? current - 1 : current + 1
  //   );
  // };

  const inputOnClick = () => {
    inputRef?.current?.focus();
  };

  // const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = Math.max(Number(e.currentTarget.value), 1);
  //   setInputValue(newValue);
  // };

  // const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  //   e.currentTarget.select();
  // };

  const trashOnClick = () => {
    removeItem(item.id as string);
  };

  return (
    <Container>
      <div>
        <PhotoFood
          src={foodImg}
          height={120}
          width={100}
          alt={item.title + "_photo"}
        />

        <Body className={poppins.className}>
          <span className={poppins.className}>{item.title}</span>

          <PriceContainer>
            <Price>{item.unityPrice}</Price>
          </PriceContainer>
        </Body>
      </div>

      <Actions>
        <div>
          <button onClick={trashOnClick}>
            <Image src={trash} alt="treshImage" />
          </button>
        </div>
        <InputWrapper onClick={inputOnClick}>
          <QtyInputContainer>
            <InputQty
              callback={inputQtyCallback}
              initialValue={qty}
              qty={qty}
              inBag
              setQty={setQty}
            />
          </QtyInputContainer>
        </InputWrapper>
      </Actions>
    </Container>
  );
}
