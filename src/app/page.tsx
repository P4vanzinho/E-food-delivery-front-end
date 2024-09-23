"use client";

import Button from "./components/Button";
import { styled } from "@linaria/react";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  width: 50vw;
  height: 50vh;
  gap: 2rem;
  align-items: center;
`;

export default function Home() {
  const route = useRouter();
  const handleClick = (userType: string) => {
    localStorage.setItem("userType", userType);
    route.push("/autenticacao/whatsapp");
  };

  return (
    <Container>
      <Main>
        <Button
          text={"Versão cliente"}
          onClick={() => handleClick("cliente")}
        />
        <Button
          text={"Versão administrador"}
          onClick={() => handleClick("administrador")}
        />
      </Main>
    </Container>
  );
}
