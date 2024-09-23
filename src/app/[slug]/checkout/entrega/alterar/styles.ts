import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.COLORS.LIGHT};
  height: calc(100vh - 19rem);
  width: 100%;

  border-radius: 5px;

  > div:nth-of-type(1) {
    width: 100%;

    padding: 1rem;
  }
  & > form {
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    padding: 1rem;
    > footer {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      justify-content: flex-end;
      position: fixed;
      bottom: 80px;
      left: 0;
      padding: 0 1.438rem;
      margin-top: 1rem;
      background-color: #f8fbff;
    }
  }
`;
