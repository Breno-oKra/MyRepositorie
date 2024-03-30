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
    width: 40%;
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


export const Boxs = styled.div`
  width: 50%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 15vh;
  margin-bottom: 100px;
  @media (max-width: 1600px) {
    padding-top: 80px;
    width: 60%;
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
