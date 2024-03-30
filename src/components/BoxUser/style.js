import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      width: 350px;
      border-radius: 20px;
    }
    &.profileProject {
      height: 100%;
      padding-top: 15px;
      align-items: start;
      img {
        width: 70%;
      }
    }
    @media (max-width: 1600px) {
      gap: 20px;
      img {
        width: 100%;
      }
    }
    @media (max-width: 1250px) {
      img {
        width: 70%;
      }
      &.profileProject {
        align-items: center;
        img {
          width: 60%;
        }
      }
    }

    @media (max-width: 550px) {
      img {
        width: 80%;
      }
      &.profileProject {
        img {
          width: 90%;
        }
      }
    }
    @media (max-height: 500px) {
      gap: 10px;
      img {
        width: 60%;
      }

    }
    @media (max-height: 500px) and (min-width: 950px) {
      gap: 10px;
      img {
        width: 40%;
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
    @media (max-width: 210px) {
      img {
        width: 50%;
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
      color: #9b5de5;
    }
  }
  @media (max-width: 550px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 250px) {
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
      color: #9b5de5;
    }
  }
  @media (max-width: 550px) {
    a {
      > svg {
        font-size: 28px;
      }
    }
  }
  @media (max-width: 280px) {
    flex-wrap: wrap;
    gap: 15px;
    a {
      > svg {
        font-size: 15px;
      }
    }
  }
`;
