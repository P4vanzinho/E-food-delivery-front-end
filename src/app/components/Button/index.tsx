import { poppins } from "@/app/fonts";
import { Container } from "./styles";

type ButtonRegistrationType = {
  text: string;
  loading?: boolean;
  selected?: boolean;
  enabledSelect?: boolean;
  typeOfButton?: "default" | "delete" | "submit";
  disabled?: boolean;
  isPublicAuth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  isPublicAuth,
  selected = false,
  enabledSelect = false,
  typeOfButton = "default",
  disabled = false,
  ...rest
}: ButtonRegistrationType) {
  return (
    <Container
      className={poppins.className}
      selected={selected}
      enabledSelect={enabledSelect}
      typeOfButton={typeOfButton}
      isPublicAuth={isPublicAuth}
    >
      <button
        type="button"
        {...rest}
        disabled={disabled}
        className={isPublicAuth ? poppins.className : poppins.className}
      >
        {text}
      </button>
    </Container>
  );
}
