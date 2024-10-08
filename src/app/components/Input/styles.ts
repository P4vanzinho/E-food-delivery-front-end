import { theme } from "@/app/styles/theme";

import { styled } from "@linaria/react";
import { darken } from "polished";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  isPublicAuth?: boolean;
};

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > label {
    font-size: 1rem;
    color: ${() => theme.COLORS.DARK};
  }

  &:has(input:focus) {
    > label {
      color: ${() => darken(0.1, theme.COLORS.PRIMARY)};
    }
  }

  &:has(input:invalid) {
    > label {
      color: ${() => darken(0.1, theme.COLORS.ERROR)};
    }
  }

  &:has(input:valid) {
    > label {
      color: ${() => theme.COLORS.PRIMARY};
    }
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid ${() => theme.COLORS.PRIMARY};
    margin-top: 7px;
    outline: 2px solid ${() => theme.COLORS.PRIMARY};

    height: ${(props) => (props.isPublicAuth ? "54px" : "41px")};

    &:has(> input:invalid) {
      border: 1px solid ${() => darken(0.1, theme.COLORS.ERROR)};

      svg {
        fill: ${() => darken(0.1, theme.COLORS.ERROR)};
      }
    }

    &:has(> input:valid) {
      border: 1px solid ${() => theme.COLORS.PRIMARY};

      svg {
        fill: ${() => darken(0.1, theme.COLORS.PRIMARY)};
      }
    }

    > input {
      width: 100%;
      background-color: transparent;
      padding: 1rem 1.678rem;
      border: 0;
      outline: 0;
      color: ${() => theme.COLORS.DARK};
      font-size: 1rem;

      &:focus {
        outline: none !important;
        background-color: transparent;
      }

      &::placeholder {
        color: ${() => theme.COLORS.GRAY};
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;

      svg {
        scale: 100px !important;
        fill: ${() => theme.COLORS.PRIMARY};
      }
    }
  }
`;
