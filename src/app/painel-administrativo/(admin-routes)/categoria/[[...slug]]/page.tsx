"use client";

import {
  Container,
  FormContainer,
  ToggleSwitch,
  ToggleSwitchContainer,
  LabelToglleSwitch,
  InputCheckBoxInToggle,
  Switch,
  ButtonsContainer,
} from "./styles";
import { poppins } from "@/app/fonts";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";

type CategoryProps = {
  params: {
    slug?: string;
  };
};

export default function Category({ params }: CategoryProps) {
  const mode = params?.slug ? "edit" : "register";
  const title =
    mode === "register"
      ? "CADASTRO DE CATEGORIA DE PRODUTO"
      : "EDIÇÃO DA CATEGORIA DE PRODUTO";

  const [checked, setChecked] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  const router = useRouter();

  function handleCategoryOnClick() {}

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <FormContainer>
        <Title>{title}</Title>

        <label htmlFor="title" className={poppins.className}>
          Título
          <input
            id="title"
            className={poppins.className}
            type="text"
            placeholder="Dê um título à categoria"
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
          />
        </label>

        <ToggleSwitchContainer>
          <ToggleSwitch>
            <p className={poppins.className}>Exibir o produto no cardapio</p>
            <LabelToglleSwitch>
              <InputCheckBoxInToggle
                type="checkbox"
                onChange={() => setChecked(!checked)}
                checked={checked}
              />
              <Switch />
            </LabelToglleSwitch>
          </ToggleSwitch>
        </ToggleSwitchContainer>

        <ButtonsContainer>
          <Button
            onClick={() => router.back()}
            className={poppins.className}
            text="Cancelar"
          />

          <Button
            type="submit"
            className={poppins.className}
            text="Salvar"
            onClick={handleCategoryOnClick}
          />
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
}
