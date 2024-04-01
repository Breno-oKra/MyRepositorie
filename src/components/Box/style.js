import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 15vh;
  margin-bottom: 100px;

  &.isProject {
    position: relative;
    width: 70%;
    gap: 0px;
    > a {
      font-size: 22px;
      font-weight: 200;
      font-family: "League Spartan", sans-serif;
    }
    padding-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    padding-top: 80px;
    width: 60%;
    &.isProject {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.LARGE}) {
    width: 100%;
    padding-left: 110px;
    &.isProject {
      padding-left: 0px;
    }
  }
  @media (min-width: ${({ theme }) => theme.MEDIUM_LG}) and (max-width: ${({theme}) => theme.LARGE}) {
    padding-inline: 140px;
    &.isProject {
      padding-inline: 10px;
    }
  }
  @media (max-width: 650px) {
    padding-inline: 10px;
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    gap: 10vh;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    gap: 20px;
    padding-top: 0px;
    padding-inline: 3px;
  }
`;
