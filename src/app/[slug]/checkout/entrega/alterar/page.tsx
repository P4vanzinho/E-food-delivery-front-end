"use client";

import { Container } from "./styles";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { SyntheticEvent, useState } from "react";
import { poppins } from "@/app/fonts";
import { useRouter } from "next/navigation";
import Title from "@/app/components/Title";
import { FoodApiAddressGettingByPostalCode } from "../../../../../../types/foodApi";

type PersonalDataProps = {
  params: {
    slug: string;
  };
};

type DataDelivery = FoodApiAddressGettingByPostalCode & {
  name: string;
  whatsapp: string;
  streetNumber: string;
  addressDetails?: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

export default function PersonalData({ params }: PersonalDataProps) {
  const router = useRouter();

  const [dataDelivery, setDataDelivery] = useState<DataDelivery>({
    name: "",
    whatsapp: "",
    streetNumber: "",
    addressDetails: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const inputOnChange = (inputId: string, currentValue: string) => {
    setDataDelivery((dataDelivery) => ({
      ...dataDelivery,
      [inputId]: currentValue,
    }));
  };

  const inputs = [
    {
      placeHolder: "Digite o seu nome",
      id: "name",
      label: "Nome",
      type: "text",
      value: dataDelivery.name,
      required: true,
    },
    {
      placeHolder: "Digite o número do seu WhatsApp",
      id: "whatsapp",
      label: "Whatsapp",
      type: "cellphone",
      value: dataDelivery.whatsapp,
      required: true,
    },
    {
      placeHolder: "Digite o CEP do endereço de entrega",
      id: "cep",
      label: "CEP",
      type: "cep",
      value: dataDelivery.cep,
      required: true,
    },
    {
      placeHolder: "Digite o endereço",
      id: "street",
      label: "Endereço",
      type: "text",
      value: dataDelivery.street,
      required: true,
    },
    {
      placeHolder: "Digite o número do endereço",
      label: "Número",
      id: "streetNumber",
      type: "text",
      value: dataDelivery.streetNumber,
      required: true,
    },
    {
      placeHolder: "Digite o bairro",
      label: "Bairro",
      id: "neighborhood",
      type: "text",
      value: dataDelivery.neighborhood,
      required: true,
    },

    {
      placeHolder: "Ex: Apartamento 302",
      label: "Complemento",
      id: "addressDetails",
      type: "text",
      value: dataDelivery.addressDetails,
      required: false,
    },
    {
      placeHolder: "Cidade",
      id: "city",
      label: "Digite a cidade",
      value: dataDelivery.city,
      required: true,
      type: "text",
    },
  ];

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    router.push(`/${params?.slug}/checkout/entrega`);
  }

  return (
    <Container>
      <div>
        <Title>Dados de entrega</Title>
      </div>

      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.label}
            id={input.label}
            label={input.label}
            placeholder={input.placeHolder}
            type={input.type}
            onChange={(e) => inputOnChange(input.id, e.currentTarget.value)}
            value={input.value}
          />
        ))}
        <footer>
          <Button
            className={poppins.className}
            type="submit"
            text="Enviar para esse endereço"
          />
        </footer>
      </form>
    </Container>
  );
}
