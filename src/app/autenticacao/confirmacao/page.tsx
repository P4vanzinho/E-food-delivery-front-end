"use client";

import {
  Container,
  TitleContainer,
  OtpContainer,
  Timer,
  ResendCode,
} from "./styles";
import Title from "@/app/components/Title";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { poppins } from "@/app/fonts";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

export default function PublicUserAuth() {
  const currentPath = usePathname();
  const isPublicAuth = currentPath.startsWith(`/autenticacao`);
  const timeRemaining = "2:34";
  const route = useRouter();
  const [userType, setUserType] = useState<string | null>(null);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleClick = () => {
    if (userType === "administrador") {
      route.push("/painel-administrativo/produtos");
    } else {
      route.push("/nome-do-restaurante");
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title isPublicAuth>Verificação de código</Title>
        <p className={poppins.className}>
          Digite o código que enviamos para o Whatsapp{" "}
          <span>(17) 7428-0874</span>
        </p>
      </TitleContainer>

      <form className={poppins.className} onSubmit={(e) => e.preventDefault()}>
        <Timer>{timeRemaining}</Timer>

        <OtpContainer>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={() => <span></span>}
            renderInput={(props) => <input {...props} inputMode="text" />}
            inputStyle="custom-otp-input"
            inputType="text"
          />
        </OtpContainer>

        <ResendCode>
          Não recebeu o código? <button>Reenviar.</button>
        </ResendCode>

        <Button
          typeOfButton="default"
          text="Pegar código"
          isPublicAuth={isPublicAuth}
          onClick={handleClick} // Corrigido para chamar a função
        />
      </form>
    </Container>
  );
}
