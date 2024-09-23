"use client";

import { Container, PaymentData, Total, ChangeLink } from "./styles";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import { centsToUnities } from "@/utils/money";
import { useOrderContext } from "@/context/order";
import { useRouter } from "next/navigation";

import { poppins } from "@/app/fonts";

type CheckoutProps = {
  params: {
    slug: string;
  };
};

export default function Checkout({ params }: CheckoutProps) {
  const { currentOrder } = useOrderContext();
  const router = useRouter();
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
        method: "Cartão de crédito",
        cardBrand: "Mastercard",
      },
      delivery: {
        method: "delivery",
      },
    },
  };

  const sendOrderOnClick = () => {
    router.push(`/${params?.slug}/pedido?status=finished`);
  };

  const showSendOrderButton = !!currentOrder?.total;

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Pagamento</Title>

        <PaymentData>
          <div>
            <label className={poppins.className}>Método de pagamento</label>

            <ChangeLink
              className={poppins.className}
              href={`/${params?.slug}/checkout/pagamento/alterar`}
            >
              Alterar
            </ChangeLink>
          </div>
          <section>
            <p>{user?.preferences?.payment?.method}</p>
            <p>Trazer maquininha de cartão</p>
            {<p>{user?.preferences?.payment?.cardBrand}</p>}
          </section>
        </PaymentData>
      </div>
      <footer>
        <Total>
          <label className={poppins.className}>Total</label>
          <div>
            {!!currentOrder?.deliveryFee && (
              <caption className={poppins.className}>
                entrega +{centsToUnities(currentOrder?.deliveryFee)}
              </caption>
            )}
            <span className={poppins.className}>
              {centsToUnities(currentOrder?.total ?? 0)}
            </span>
          </div>
        </Total>
        <Button
          disabled={!showSendOrderButton}
          text="Confirmar e enviar pedido"
          onClick={sendOrderOnClick}
          className={poppins.className}
        />
      </footer>
    </Container>
  );
}
