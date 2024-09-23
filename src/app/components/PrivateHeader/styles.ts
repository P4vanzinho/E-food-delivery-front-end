import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { lighten } from "polished";
type SidebaContainerType = {
  isShow?: boolean;
};
export const Container = styled.header`
  padding: 30px 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.COLORS.LIGHT};
  position: fixed;
  width: 100%;
  z-index: 1;
  height: auto;

  @media (max-width: 670px) {
    padding: 15px 1.438rem 15px;
    align-items: flex-start;
  }
`;

export const Logo = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  padding: none;
  background-color: transparent;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 1rem;

      color: ${theme.COLORS.GRAY};
      margin-left: 5px;
    }

    > img {
      border-radius: 5px;
      width: 1.25rem;
      height: 1.25rem;
      object-fit: cover;
    }
  }

  > div:nth-of-type(2) > span {
    font-size: 1.3rem;
    font-weight: 400;
    color: ${theme.COLORS.DARK};

    &:nth-of-type(3) {
      color: ${theme.COLORS.PRIMARY};
    }
  }
`;

const selected = `
  color: ${theme.COLORS.DARK};
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 50px;

  > a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${() => lighten(0.5, theme.COLORS.DARK)};
    transition: all 80ms ease-out;

    &:hover {
      ${selected}
    }

    &.selected {
      ${selected}
    }
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

export const RightTopMenu = styled.div`
  display: flex;
  gap: 50px;
`;

export const MobileMenu = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  @media (min-width: 670px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div<SidebaContainerType>`
  padding: 1rem;
  display: ${(props) => (props.isShow ? "flex" : "none")};
  width: 200px;
  flex-direction: column;
  gap: 1rem;
  height: 23vh;
  background-color: ${theme.COLORS.PRIMARY};
  border-radius: 0px 0px 0 20px;
  z-index: 9999;
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;

  transition: left 0.3s;

  > svg {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  > a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${() => theme.COLORS.WHITE};
    transition: all 80ms ease-out;
    font-weight: 600;
  }
`;

export const SideBarSeparator = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${() => theme.COLORS.WHITE};
`;

// export const SidebarContainer = styled.div<SidebaContainerType>`
//   padding: 3.75rem 5.625rem 0 1.938rem;
//   display: flex;
//   width: 66vw;
//   flex-direction: column;
//   height: 100vh;
//   background-color: ${theme.COLORS.WHITE};
//   border-radius: 20px 20px;
//   z-index: 9999;
//   position: fixed;
//   right: ${(props) => (props.isShow ? `0` : `-66vw`)};

//   top: 0;
//   transition: left 0.3s;
// `;
