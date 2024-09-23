import { applicationConfig } from "@/config/application";
import { Container } from "./styles";
import { poppins } from "@/app/fonts";

export default function Version() {
  return (
    <Container>
      <span className={poppins.className}>v {applicationConfig.version}</span>
    </Container>
  );
}
