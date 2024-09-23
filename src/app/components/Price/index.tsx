import { ReactNode } from "react";
import { poppins } from "@/app/fonts";
import { Span } from "./styles";
import { centsToUnities } from "@/utils/money";

interface ButtonRegistrationType {
  children: ReactNode;
}

export default function Price({ children }: ButtonRegistrationType) {
  const price = centsToUnities(Number(children));

  return <Span className={poppins.className}>${price}</Span>;
}
