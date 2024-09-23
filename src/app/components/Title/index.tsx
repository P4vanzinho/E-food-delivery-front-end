import { ReactNode } from "react";
import { poppins } from "@/app/fonts";
import { Text } from "./styles";

interface ButtonRegistrationType {
  children: ReactNode;
  isPublicAuth?: boolean;
}

export default function Title({ children }: ButtonRegistrationType) {
  return <Text className={poppins.className}>{children}</Text>;
}
