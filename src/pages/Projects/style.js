import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  /* background-color: #001845; */
`;
export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  padding-inline: 250px;

  @media (max-width: 1600px) {
    padding-inline: 100px;
  }
  @media (max-width: 1250px) {
    padding-inline: 30px;
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 20px;
  }
  @media (max-width: 210px) {
    overflow: hidden;
    padding-inline: 5px;
  }
`;
export const ContainerUser = styled.div`
  position: sticky;
  top: 0px;
  width: 30%;
  height: 90vh;
  padding: 10px;
  display: flex;
  padding-top: 150px;

  gap: 10px;
  @media (max-width: 1600px) {
    padding-top: 80px;
  }
  @media (max-width: 1150px) {
    width: 100%;
    position: relative;
    height: auto;
    flex-direction: column;
    padding-top: 0;
  }
  @media (max-width: 650px) {
    padding-inline: 20px;
  }
  @media (max-width: 210px) {
    overflow: hidden;
    padding-inline: 0px;
  }
`;

export const Boxs = styled.div`
  position: relative;
  width: 70%;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  margin-bottom: 100px;


  padding-top: 100px;
  @media (max-width: 1600px) {
    padding-top: 80px;
  }
  @media (max-width: 1150px) {
    width: 100%;
    padding-left: 110px;
  }
  @media (max-width: 650px) {
    padding-inline: 10px;
  }
  @media (max-width: 550px) {
    gap: 10vh;
  }
  @media (max-width: 210px) {
    gap: 20px;
    padding-top: 0px;
    padding-inline: 3px;
  }
`;
/* export const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 50px;
  > h3 {
    font-family: "League Spartan", sans-serif;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    font-weight: 200;
  }
  > p {
    font-size: 14px;
    transition: 400ms transform linear;
    font-weight: bold;
  }
  > p:hover {
    text-decoration: underline;
    svg {
      transform: translateY(-3px);
    }
  }
  > div {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 10px;
    background-color: #002855;
    padding: 20px;
    border-radius: 10px;
    transition:1s all linear;
    > img {
      width: 300px;
      transition: 400ms transform linear;
    }
    &:hover {
        box-shadow: 0px 10px 15px -3px #9b5de559;
      > img {
        transform: translateX(-2px);
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 5px;
      > div:nth-child(1) {
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
          p {
            margin-top: 2px;
            font-size: 11px;
            color: #00f5d4a8;
          }
        }
        a:nth-child(2) {
          font-size: 12px;
          text-align: center;
        }
        a:nth-child(2):hover {
          text-decoration: underline;
        }
        a:hover {
          span {
            text-decoration: underline;
            svg {
              transform: translateY(-5px);
            }
          }
        }
      }

      p {
        color: #adb5bd;
        font-size: 14px;
      }
      p a {
        font-weight: bold;
      }
      p a:hover {
        text-decoration: underline;
      }
      div {
        display: flex;
        gap: 10px;
        p {
          color: #9b5de5;

          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
      > div:nth-child(4) {
       
        }
      }
      @media (max-width: 1600px) {
        a {
          span {
            font-size: 15px;
          }
        }
        p {
          font-size: 13px;
        }
        div {
          flex-wrap: wrap;
          p {
            font-size: 10px;
          }
        }
      }
    }

    @media (max-width: 550px) {
      flex-direction: column;
      align-items: center;
      padding: 10px;
      img {
        width: 200px;
      }
      &:hover {
        > img {
          transform: scale(1.1) translateX(0px);
          z-index: 2;
        }
        
      }
      div {
        a {
          span {
            font-size: 12px;
          }
        }
        p {
          font-size: 11px;
        }
        div {
          p {
            font-size: 9px;
          }
        }
      }
    }
  }
  @media (max-width: 550px) {
    gap: 30px;
  }
  @media (max-width: 210px) {
    h3 {
      font-size: 12px;
    }
    > p {
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
`; */


