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
  width: 50%;
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
    height: 100vh;
    flex-direction: column;
    padding-top: 0;
    padding-left: 110px;
  }
  @media (max-width: 650px) {
    padding-inline: 20px;
  }
  @media (max-width: 210px) {
    overflow: hidden;
    padding-inline: 0px;
  }
`;
export const BoxAlignUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img {
      width: 400px;
      border-radius: 20px;
    }

    div:nth-child(2) {
      display: flex;
      gap: 20px;
      p {
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 14px;
        svg {
          font-size: 23px;
          color: #9b5de5;
        }
      }
    }
    div:nth-child(3) {
      display: flex;
      gap: 20px;
      a {
        > svg {
          font-size: 35px;
          transition: 100ms;
        }
        > svg:hover {
          transform: scale(1.2);
          color: #9b5de5;
        }
      }
    }
    @media (max-width: 1600px) {
      gap: 20px;
      img {
        width: 350px;
      }
    }
    @media (max-width: 1250px) {
      img {
        width: 300px;
      }
    }

    @media (max-width: 550px) {
      img {
        width: 100%;
      }
    }
    @media (max-height: 500px) {
      gap: 10px;
      img {
        width: 20%;
      }
    }
    @media (max-height: 300px) {
      gap: 5px;
    }
    @media (max-width: 210px) {
      img {
        width: 50%;
      }
      div:nth-child(2) {
        gap: 5px;

        p {
          font-size: 8px;
          svg {
            font-size: 12px;
          }
        }
      }
      div:nth-child(3) {
        flex-wrap: wrap;
        gap: 5px;
        a {
          > svg {
            font-size: 15px;
          }
        }
      }
    }
  }
  @media (max-width: 1150px) {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const BoxNavigates = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 115px;
  padding: 10px;

  a {
    width: 100%;
    background: none;
    color: white;
    font-size: 20px;
    text-align: start;
    padding-left: 15px;
    font-weight: bold;
    font-size: 23px;
    border-left: 2px solid #deaaff;

    transition: 100ms all linear;
    p {
      transition: 100ms all linear;
    }
    @media (max-width: 1150px) {
      padding-left: 5px;
    }
  }
  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    .kong {
      p {
        color: #c77dff;
      }

      border-left: 10px solid #deaaff;
    }
    @media (max-width: 1150px) {
      .kong {
        p {
          color: #c77dff;
        }

        border-left: 15px solid #deaaff;
      }
    }
    @media (max-width: 650px) {
      flex-direction: row;
      padding-inline: 30px;
      padding-top: 10px;
      align-items: end;
      background-color: #00285542;
      backdrop-filter: blur(40px);

      .kong {
        p {
          color: #c77dff;
        }
        border-left: none;
        border-bottom: 15px solid #deaaff;
      }
    }
    @media (max-width: 550px) {
      padding-inline: 10px;
    }
  }
  > div a:hover {
    p {
      transform: translateX(10px);
    }
  }
  @media (max-width: 1600px) {
    a {
      font-size: 17px;
    }
    > div {
      gap: 2px;
      justify-content: space-evenly;
    }
  }
  @media (max-width: 1150px) {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    padding: 0;

    a {
      border-left: 2px solid #deaaff;
      font-size: 18px;
    }
    > div {
      justify-content: center;
    }
  }
  @media (max-width: 650px) {
    top: initial;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 10;
    a {
      border-left: none;
      border-bottom: 2px solid #deaaff;
      font-size: 16px;
      text-align: center;
      padding-bottom: 5px;
    }
    > div {
      gap: 0px;
    }
    > div a:hover {
      p {
        transform: translateY(-5px);
      }
    }
  }
  @media (max-width: 550px) {
    a {
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
  @media (max-width: 210px) {
    a {
      font-size: 8px;
      padding-bottom: 15px;
    }
  }
`;
export const Boxs = styled.div`
  width: 50%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 15vh;
  margin-bottom: 100px;
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
export const AboutMe = styled.div`
  width: 100%;
  padding-top: 150px;
  h2 {
    font-size: 46px;
    margin: 20px 0;
    font-family: "League Spartan", sans-serif;
    span {
      color: #9b5de5;
    }
  }
  p {
    color: #dee2e6;
    font-size: 18px;
    letter-spacing: 2px;
  }
  @media (max-width: 1600px) {
    padding-top: 10px;
  }
  @media (max-width: 550px) {
    padding-top: 5px;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 210px) {
    padding-top: 5px;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
  }
`;
export const Projects = styled.div`
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

    img {
      width: 200px;
      transition: 400ms transform linear;
    }
    img:hover {
      transform: scale(1.1) translateX(-10px);
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 5px;

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
          font-size: 13px;
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

      p {
        color: #adb5bd;
        font-size: 14px;
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
    @media (max-width: 1600px) {
      img {
        width: 150px;
      }
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
    >p{
        font-size: 10px;
    }
    > div {
      img {
        width: 100%;
      }
      >div{
        a{
            span{
                font-size: 10px;
            }
            p{
                font-size: 9px;
            }
       
        }
      }
    }
  }
`;
export const Certificates = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h3 {
    font-family: "League Spartan", sans-serif;
    font-size: 20px;

    font-weight: 200;
  }
  > div {
    display: flex;
    gap: 20px;

    img {
      min-width: 60px;
      min-height: 60px;
      max-width: 60px;
      max-height: 60px;
      object-fit: contain;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      span {
        color: #00f5d4;
        font-size: 12px;
        padding: 5px;
        border-radius: 10px;
      }
      > div {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 30px;
        font-size: 12px;
        p {
          color: #e9ecef;
        }
      }
      > p {
        font-size: 13px;
        color: #adb5bd;
        letter-spacing: 1px;
      }
      @media (max-width: 550px) {
        gap: 5px;

        span {
          font-size: 10px;
        }
        > div {
          flex-wrap: wrap;
          gap: 0;
          justify-content: space-between;
          font-size: 11px;
        }
        > p {
          font-size: 10px;
        }
      }
    }
    @media (max-width: 210px) {
      flex-direction: column;
    }
  }
`;
export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
  > h3 {
    font-family: "League Spartan", sans-serif;
    font-size: 20px;

    font-weight: 200;
  }
  > div {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    width: 100%;

    div {
      padding: 20px;
      background-color: #002855;
      border-radius: 20px;
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      border: 2px solid #33415c;
      img {
        width: 70px;
        height: 70px;
        object-fit: cover;
      }
    }
    @media (max-width: 1150px) {
      justify-content: center;
    }
    @media (max-width: 550px) {
      gap: 10px;
      padding: 10px;
      justify-content: center;
      div {
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    @media (max-width: 210px) {
      padding: 0px;
      div {
        padding: 5px;
        border-radius: 5px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  @media (max-width: 210px) {
      h3{
        font-size: 14px;
      }
    }
`;
export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  p {
    font-family: "League Spartan", sans-serif;
    font-size: 18px;
    span {
      color: #c77dff;
    }
  }
  @media (max-width: 550px) {
    padding-bottom: 80px;
    padding-top: 0;
  }
  @media (max-width: 210px) {
    p{
        font-size: 12px;
    }
  }
`;
