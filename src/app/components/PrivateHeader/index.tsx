"use client";
import {
  Container,
  Logo,
  DesktopMenu,
  MobileMenu,
  SidebarContainer,
  SideBarSeparator,
} from "./styles";
import { IoMenu } from "react-icons/io5";
import businessLogo from "../../../../public/businessLogo.png";
import { poppins } from "../../fonts";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";

import { RoutesEnum } from "@/app/enums";
import classNames from "classnames";
import { useState } from "react";
import Modal from "../Modal";

export default function PrivateHeader() {
  const pathname = usePathname();
  const route = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleMenu = () => {
    setShowModal((current) => !current);
  };

  return (
    <>
      <Container>
        <Logo className={poppins.className}>
          <div>
            <Image
              src={businessLogo}
              width={30}
              height={30}
              alt={`mc_donalds_logo`}
            ></Image>
            <span>MC DONALDS</span>
          </div>
          <div onClick={() => route.push("/painel-administrativo/produtos")}>
            <span>FOOD</span>
            <span>-</span>
            <span>E</span>
          </div>
        </Logo>

        <DesktopMenu className={poppins.className}>
          <Link
            className={classNames({
              selected: pathname === RoutesEnum.PRODUTOS,
            })}
            href={RoutesEnum.PRODUTOS}
          >
            PRODUTOS
          </Link>

          <Link
            className={classNames({
              selected: pathname === RoutesEnum.WHATSAPP,
            })}
            href=""
          >
            CONFIGURAR WHATSAPP
          </Link>
        </DesktopMenu>

        <MobileMenu onClick={handleMenu}>
          <IoMenu size={40} />
        </MobileMenu>
      </Container>
      <SidebarContainer isShow={showModal} className={poppins.className}>
        <IoIosClose
          size={40}
          color="white"
          onClick={() => setShowModal(false)}
        />
        <Link href={RoutesEnum.PRODUTOS} onClick={() => setShowModal(false)}>
          PRODUTOS
        </Link>

        <SideBarSeparator />
        <Link
          className={classNames({
            selected: pathname === RoutesEnum.WHATSAPP,
          })}
          href=""
        >
          WHATSAPP
        </Link>
      </SidebarContainer>
      {showModal && <Modal onClickCallback={() => setShowModal(false)} />}
    </>
  );
}
