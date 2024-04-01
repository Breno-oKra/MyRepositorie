import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    img {
      width: 350px;
      border-radius: 20px;
      transition: 500ms all linear;
    }
    &.profileProject {
      height: 100%;
      padding-top: 15px;
      align-items: center;
      padding-right: 40px;
      img {
        width: 70%;
      }
    }

    @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
      gap: 20px;
      img {
        width: 100%;
      }
    }
    @media (max-width: ${({ theme }) => theme.LARGE}) {
      img {
        width: 50%;
      }
      &.profileProject {
        padding-right: 0px;
        img {
          width: 60%;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.SMALL}) {
      img {
        width: 70%;
      }
      &.profileProject {
        img {
          width: 90%;
        }
      }
    }

    @media (max-height: 500px) and (max-width: ${({ theme }) => theme.LARGE}) {
      gap: 10px;
      img {
        width: 30%;
      }
    }
    @media (max-height: 400px) and (max-width: 950px) {
      gap: 10px;
      img {
        width: 20%;
      }
    }
    @media (max-height: 300px) {
      gap: 5px;
    }
    @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
      padding-top: 10px;
      img {
        width: 50%;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.LARGE}) {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  @media (max-height: ${({ theme }) => theme.EXTRA_SMALL}) {
    padding-top: 10px;
    height: auto;
  }
`;
export const Infos = styled.div`
  display: flex;
  gap: 20px;
  p {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 14px;
    svg {
      font-size: 23px;
      color: var(--highlights);
    }
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    gap: 5px;
    flex-direction: column;
  }
`;
export const BoxLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    > svg {
      font-size: 35px;
      transition: 100ms;
    }
    > svg:hover {
      transform: scale(1.2);
      color: var(--highlights);
    }
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    a {
      > svg {
        font-size: 28px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    flex-wrap: wrap;
    gap: 15px;
    a {
      > svg {
        font-size: 15px;
      }
    }
  }
`;
export const BoxSunMoon = styled.div`
  display: flex;
  gap: 5px;
  width: 50px;
  height: 20px;
  border-radius: 40px;
  background-color: gray;
  align-items: center;
  justify-content: start;
  button {
    width: 60%;
    height: 150%;
    img {
      width: 100%;
    }
    transition: 500ms transform linear;
  }
  &.boxSun {
    .sun {
      display: none;
    }
    .moon {
      display: flex;
    }
    button {
      background-color: ${({ theme }) => theme.BLUE_200};
      transform: translateX(20px);
    }
  }

  .moon {
    display: none;
  }

  .bt-moon {
    background-color: #fff;
    padding: 5px;
    border-radius: 100%;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    width: 30px;
    height: 15px;
    .bt-moon {
      padding: 2px;
    }
    &.boxSun {
      button {
        transform: translateX(15px);
      }
    }
  }
`;
