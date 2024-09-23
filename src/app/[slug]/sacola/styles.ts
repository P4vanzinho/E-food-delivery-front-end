import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  height: calc(100vh - 20.438rem);
  gap: 1.625rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;

    > button {
      border: none;
      background-color: transparent;

      input:focus {
        outline: none;
      }

      &:hover {
        > span {
          font-weight: 600;
          color: ${() => darken(0.2, theme.COLORS.ERROR)};
        }
      }

      > span {
        font-size: 1rem;
        color: ${theme.COLORS.PRIMARY};
        font-weight: 700;
        transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 250ms;
        cursor: pointer;
      }
    }
  }
`;

export const RequestsContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: 4px;
  }
`;

export const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 16px;
    color: ${theme.COLORS.DARK};
  }

  span:nth-of-type(2) {
    font-weight: 600;
  }
`;

export const PriceContainer = styled.div`
  > span {
    font-size: 20px;
    color: ${theme.COLORS.DARK};
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;
  position: fixed;
  bottom: 70px;

  left: 0;
  padding: 0 40px;
  background-color: ${theme.COLORS.LIGHT};

  > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: center;

    > button {
      border: none;
      background-color: transparent;
      color: ${theme.COLORS.PRIMARY};
      font-weight: bold;
      input:focus {
        outline: none;
      }

      &:hover {
        > span {
          font-weight: 600;
          color: ${() => darken(0.2, theme.COLORS.ERROR)};
        }
      }
    }
  }
`;
