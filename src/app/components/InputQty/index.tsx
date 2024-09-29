import { poppins } from "@/app/fonts";
import { Container, QtyContainer } from "./styles";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

type InputQtyProps = {
  initialValue?: number;
  callback: (value: number) => void;
  qty: number;
  setQty: Dispatch<SetStateAction<number>>;
  inBag?: boolean;
};

export default function InputQty({ callback, qty, setQty }: InputQtyProps) {
  const [subtractActive, setSubtractActive] = useState(true);

  useEffect(() => {
    setSubtractActive(qty > 1); // Garante que o botão de subtração fique ativo apenas quando `qty` for maior que 1
    callback(qty);
  }, [callback, qty]);

  const buttonOnClick = (mode: "add" | "subtract") => {
    if (!subtractActive && mode === "subtract") {
      return;
    }

    setQty((current) => (mode === "subtract" ? current - 1 : current + 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value)); // Garante que o valor não seja menor que 1
    setQty(value); // Atualiza o valor do qty
    callback(value); // Passa o valor atualizado para o callback
  };

  return (
    <Container inBag>
      <QtyContainer inBag>
        <button
          disabled={!subtractActive}
          type="button"
          onClick={() => buttonOnClick("subtract")}
        >
          <RiSubtractFill size={15} />
        </button>
        <input
          type="number"
          value={qty}
          className={poppins.className}
          onChange={handleInputChange} // Adiciona o `onChange` para manipular alterações no input
          min={1} // Garante que o valor mínimo seja 1
        />
        <button type="button" onClick={() => buttonOnClick("add")}>
          <AiOutlinePlus size={15} />
        </button>
      </QtyContainer>
    </Container>
  );
}
