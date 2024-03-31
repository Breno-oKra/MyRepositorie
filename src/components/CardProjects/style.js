import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  gap: 10px;

  padding: 20px;
  border-radius: 10px;
  transition: 1s all linear;

  img {
    width: 200px;
    transition: 400ms transform linear;
  }

  > p {
    font-size: 14px;
    color: var(--info_op);
    width: 100px;
    align-self: center;
    text-align: center;
    font-weight: bold;
    line-height: 20px;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    img {
      width: 150px;
    }
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    img {
      width: 200px;
    }
    img:hover {
      transform: scale(1.1);
      z-index: 2;
    }
  }
`;
export const HeaderTitle = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    span {
      font-size: 18px;
      font-weight: bold;
      transition: 200ms all linear;
      svg {
        transition: 200ms transform linear;
      }
    }
    > p {
      margin-top: 2px;
      font-size: 11px;
      color: var(--info_op);
    }
  }
  a:hover {
    span {
      text-decoration: underline;
      svg {
        transform: translateY(-5px);
      }
    }
  }
  a:nth-child(2) {
    font-size: 12px;
    text-align: center;
  }
  a:nth-child(2):hover {
    text-decoration: underline;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    a {
      span {
        font-size: 15px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    a {
      span {
        font-size: 13px;
      }
    }
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  p {
    color: var(--highlights);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    p {
      font-size: 10px;
    }
  }
`;
export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.GRAY_200};
  padding-top: 10px;
  gap: 10px;
  > span {
    font-size: 11px;
    font-weight: bold;
    color: var(--description);
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: 12px;
      font-weight: bold;
      img {
        width: 30px;
        border-radius: 100%;
      }
    }
  }
`;
export const BoxDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    > p {
      color: var(--description);
      font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
      > p {
        font-size: 14px;
      }
    }
    @media (max-width: ${({ theme }) => theme.SMALL}) {
      > p {
        font-size: 12px;
      }
    }
`
export const ImageBox = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &:hover {
      img {
        transform: translateY(-5px);
      }
      .out {
        width: 85%;
      }
    }

    .out {
      width: 90%;
      height: 0px;
      margin-bottom: 10px;
      box-shadow: 0px 5px 18px 2px rgb(0, 0, 0);
      transition: 300ms all linear;
    }
`;
