import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  background-color: #002855;
  padding: 20px;
  border-radius: 10px;
  transition: 1s all linear;
  &:hover {
    box-shadow: 0px 10px 15px -3px #9b5de559;
    > img {
      transform: translateX(-2px);
    }
  }
  &:hover {
    > img {
      transform: translateX(-2px);
    }
  }
  img {
    width: 200px;
    transition: 400ms transform linear;
  }
  > p {

    font-size: 14px;
    color: #00f5d4a8;
    width: 100px;
    align-self: center;
    text-align: center;
    font-weight: bold;
    line-height: 20px;
    
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    > p {
      color: #adb5bd;
      font-size: 14px;
    }
    @media (max-width: 1600px) {
      > p {
        font-size: 14px;
      }
    }
    @media (max-width: 550px) {
      > p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 1600px) {
    img {
      width: 150px;
    }
    >
  }
  @media (max-width: 550px) {
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
      color: #e9ecef;
      transition: 200ms all linear;
      svg {
        transition: 200ms transform linear;
      }
    }
    > p {
      margin-top: 2px;
      font-size: 11px;
      color: #00f5d4a8;
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
  @media (max-width: 1600px) {
    a {
      span {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 550px) {
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
    color: #9b5de5;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media (max-width: 1600px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 550px) {
    p {
      font-size: 10px;
    }
  }
`;
export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #273654;
  padding-top: 10px;
  gap: 10px;
  > span {
    font-size: 11px;
    font-weight: bold;
    color: #adb5bd;
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
