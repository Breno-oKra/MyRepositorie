import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 50px;

  > h3 {
    font-family: "League Spartan", sans-serif;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    font-weight: 200;
    svg {
      font-size: 32px;
    }
  }
  > a {
    font-size: 14px;
    transition: 400ms transform linear;
    font-weight: bold;
  }
  > a:hover {
    text-decoration: underline;
    svg {
      transform: translateY(-3px);
    }
  }
  &.isProject {
    gap: 70px;
    > div {
      > img {
        width: 250px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.SMALL}) {
    gap: 30px;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    h3 {
      font-size: 12px;
    }
    > a {
      font-size: 10px;
    }
    > div {
      img {
        width: 100%;
      }
      > div {
        a {
          span {
            font-size: 10px;
          }
          p {
            font-size: 9px;
          }
        }
      }
    }
  }
`;
