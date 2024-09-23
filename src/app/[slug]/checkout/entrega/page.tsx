"use client";

import {
  Container,
  DeliveryData,
  Total,
  ChangeLink,
  DeliveryMethod,
} from "./styles";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { poppins } from "@/app/fonts";
import { useBagContext } from "@/context/bag";
import { centsToUnities } from "@/utils/money";

import RadioButton from "@/app/components/RadioButton";
import { useOrderContext } from "@/context/order";
import useMocks from "@/mocks/mock";
type CheckoutProps = {
  params: {
    slug: string;
  };
};

export default function Checkout({ params }: CheckoutProps) {
  const router = useRouter();
  const [deliveryFee] = useState(0);
  const { total: totalBag } = useBagContext();
  const { businessInfos } = useMocks();
  const user = {
    name: "Thiago Pavan",
    whatsapp: "62999999999",
    address: {
      cep: "74945569",
      street: "Street 1",
      streetNumber: "1",
      neighborhood: "Neighborhood 1",
      addressDetails: "number 234",
      city: "Great city",
      state: "Great State",
    },
    preferences: {
      payment: {
        method: "credit",
        cardBrand: "masterCard",
      },
      delivery: {
        method: "delivery",
      },
    },
  };

  const total = totalBag + deliveryFee;

  const { setCurrentOrder } = useOrderContext();

  const [radioSelected, setRadioSelected] = useState("delivery");

  const radioButtonCallback = (id: string) => {
    setRadioSelected(id);
  };

  const deliveryAddressData = {
    street:
      radioSelected === "delivery"
        ? user?.address?.street
        : businessInfos?.address?.street,
    streetNumber:
      radioSelected === "delivery"
        ? user?.address?.streetNumber
        : businessInfos?.address?.number,
    neighborhood:
      radioSelected === "delivery"
        ? user?.address?.neighborhood
        : businessInfos?.address?.neighborhood,
    addressDetails:
      radioSelected === "delivery" ? user?.address?.addressDetails : "",
    city:
      radioSelected === "delivery"
        ? user?.address?.city
        : businessInfos?.address?.city,
    state:
      radioSelected === "delivery"
        ? user?.address?.state
        : businessInfos?.address?.state,
  };

  const sendDataButtonOnClick = () => {
    const route = user?.preferences?.payment
      ? `/${params?.slug}/checkout/pagamento`
      : `/${params?.slug}/checkout/pagamento/alterar`;

    setCurrentOrder((order) => ({
      ...order,
      businessId: params?.slug,
      user: {
        name: user?.name,
        whatsapp: user?.whatsapp,
        address: {
          cep: user?.address?.cep,
          city: user?.address?.city,
          neighborhood: user?.address?.neighborhood,
          number: user?.address?.streetNumber,
          state: user?.address?.state,
          street: user?.address?.street,
          addressDetails: user?.address?.addressDetails,
        },
      },
      deliveryFee,
      total: totalBag + deliveryFee,
    }));

    router.push(route);
  };

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Entrega</Title>

        <DeliveryData>
          <div>
            <label className={poppins.className}>Dados de entrega</label>
            {radioSelected === "delivery" && (
              <ChangeLink
                className={poppins.className}
                href={`/${params?.slug}/checkout/entrega/alterar`}
              >
                Alterar
              </ChangeLink>
            )}
          </div>

          {user && (
            <section>
              <p>{user?.name}</p>

              <div>
                <p>
                  {`${deliveryAddressData.street}, ${
                    deliveryAddressData.streetNumber
                  }, ${deliveryAddressData.neighborhood}. ${
                    deliveryAddressData.addressDetails ?? ""
                  } ${deliveryAddressData.city}/${deliveryAddressData.state}`}
                </p>
              </div>

              <p>{user?.whatsapp ?? ""}</p>
            </section>
          )}
        </DeliveryData>

        <DeliveryMethod>
          <div>
            <label className={poppins.className}>Método de entrega</label>
          </div>

          <section>
            <RadioButton
              id="delivery"
              label="Entrega a domicílio"
              checked={radioSelected === "delivery"}
              onCallback={radioButtonCallback}
            />
            <RadioButton
              id="pickup"
              label="Retirar no estabelecimento"
              checked={radioSelected === "pickup"}
              onCallback={radioButtonCallback}
            />
          </section>
        </DeliveryMethod>
      </div>
      <footer>
        <Total>
          <label className={poppins.className}>Total</label>
          <div>
            {!!deliveryFee && (
              <caption className={poppins.className}>
                entrega +{centsToUnities(deliveryFee)}
              </caption>
            )}
            <span className={poppins.className}>{centsToUnities(total)}</span>
          </div>
        </Total>
        <Button
          text="Confirmar dados"
          onClick={sendDataButtonOnClick}
          className={poppins.className}
        />
      </footer>
    </Container>
  );
}
