"use client";

import CategoryList from "../components/CategoryList";

import { theme } from "../styles/theme";
import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${theme.COLORS.LIGHT};
  overflow-y: auto;
`;

export default function Home() {
  return (
    <Container>
      <CategoryList />
    </Container>
  );
}
