import { ReactNode } from "react";

import { styled } from "@linaria/react";
import FloatMenu from "@/app/components/FloatMenu";
import PrivateHeader from "@/app/components/PrivateHeader";
import { theme } from "@/app/styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: hidden;
  padding: 6.625rem 1.438rem 80px;
  z-index: 0;
  position: relative;
`;

const PrivateFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 9;
  height: 80px;
  background-color: ${() => theme.COLORS.LIGHT};
`;

type AuthHeaderProps = {
  children: ReactNode;
};

export default function PrivateLayout({ children }: AuthHeaderProps) {
  return (
    <>
      <PrivateHeader />
      <Container>{children}</Container>
      <PrivateFooter>
        <FloatMenu />
      </PrivateFooter>
    </>
  );
}
