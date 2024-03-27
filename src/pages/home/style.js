import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  /* background-color: #001845; */
  background: rgb(0, 24, 69);
  background: radial-gradient(
    circle,
    rgba(0, 24, 69, 1) 0%,
    rgba(2, 62, 125, 1) 100%
  );
  background-repeat: no-repeat;
`;
export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  padding-inline: 250px;
  
`;
export const ContainerUser = styled.div`
  position: sticky;
  top: 0px;
  width: 50%;
  height: 90vh;
  padding: 10px;
  display: flex;
  padding-top: 150px;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;
export const BoxAlignUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div{
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
          color:#9b5de5;
        }
      }
    }
    div:nth-child(3) {
      display: flex;
      gap: 20px;
      > svg {
        font-size: 35px;
        transition: 100ms;
      }
      >svg:hover{
        transform: scale(1.2);
        color:#9b5de5;
    
      }

    }
  }
 
`;
export const BoxNavigates = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  }
  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    .kong {
      p {
        color: #c77dff;
      }
   
      border-left: 90px solid #deaaff;
    }
  }
  > div a p:hover {
    transform: translateX(10px);
  }
`;
export const Boxs = styled.div`
  width: 50%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 15vh;
  margin-bottom: 100px;
`;
export const AboutMe = styled.div`
  width: 100%;
  height: 50vh;
  padding-top: 100px;

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
`;
export const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

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
      h2 {
        a {
          color: #e9ecef;
          transition: 200ms all linear;
          svg {
            transition: 200ms transform linear;
          }
        }

        font-size: 18px;
        a:hover {
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
          border-radius: 20px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;
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
    }
  }
`;
export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

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
    width: 800px;

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
`;
