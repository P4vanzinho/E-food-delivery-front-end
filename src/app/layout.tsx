"use client";

import { ReactNode } from "react";
import { poppins } from "./fonts";
import { ToastContainer } from "react-toastify";
import "../assets/ReactToastify.css";
import { css } from "@linaria/core";
import { LoadingContextProvider } from "@/context/loading";
import FullScreenLoading from "./components/FullScreenLoading";
import { theme } from "./styles/theme";

const globalStyle = css`
  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button,
  a {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    overflow-y: auto;

    /* Estilos para as barras de rolagem */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.COLORS.PRIMARY};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.COLORS.LIGHT};
      border-radius: 8px;
    }
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.COLORS.LIGHT};

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    span,
    strong {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  @keyframes scrollUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
      /**/
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
      /**/
    }
  }

  @keyframes bubbleNotification {
    0% {
      opacity: 0;
      transform: scale(0.9);
      /*transform: translateY(-50px) ;*/
    }

    100% {
      opacity: 1;
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }

  @keyframes bubbleStorie {
    0% {
      opacity: 0;
      transform: scale(0.1);
      /*transform: translateY(-50px) ;*/
    }

    100% {
      opacity: 1;
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }

  @keyframes likedAnimation {
    0% {
      opacity: 1;

      transform: scale(0.1);
      /*transform: translateY(-50px) ;*/
    }
    50% {
      opacity: 1;

      transform: scale(1);
      /*transform: translateY(-50px) ;*/
    }
    70% {
      opacity: 1;

      transform: scale(0.8);
      /*transform: translateY(-50px) ;*/
    }
    100% {
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }

  @keyframes dislikedAnimation {
    0% {
      opacity: 0;

      transform: scale(1);
      /*transform: translateY(-50px) ;*/
    }
    50% {
      opacity: 1;

      transform: scale(0.8);
      /*transform: translateY(-50px) ;*/
    }
    100% {
      opacity: 1;
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }
`;

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={globalStyle}>
      <body>
        <LoadingContextProvider>
          <FullScreenLoading>
            {children}
            <ToastContainer className={poppins.className} />
          </FullScreenLoading>
        </LoadingContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
