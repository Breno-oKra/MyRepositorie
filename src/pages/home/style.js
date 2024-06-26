import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

`;
export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  padding-inline: 250px;
 
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    padding-inline: 100px;
  }
  @media (max-width: ${({ theme }) => theme.LARGE}) {
    padding-inline: 30px;
    flex-direction: column;
    align-items: center;
    padding-inline: 20px;
  }
  /*   @media (max-width: ${({ theme }) => theme.MEDIUM}) {
    flex-direction: column;
    align-items: center;
    padding-inline: 20px;
  } */
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    overflow: hidden;
    padding-inline: 5px;
  }
  @media (max-height: 425px) and (min-width: ${({ theme }) => theme.LARGE}) {
    gap: 30px;
  }
`;
export const ContainerUser = styled.div`
  position: sticky;
  top: 0px;
  width: 50%;
  height: 90vh;

  display: flex;
  padding-top: 150px;

  gap: 10px;
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    padding-top: 80px;
    
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.LARGE}) {
    width: 100%;
    position: relative;
    height: 100vh;
    flex-direction: column;
    padding-top: 0;
    /* padding-left: 110px; */
  }
  @media (max-height: 575px) {
    height: auto;
    padding-top: 10px;

  }
  @media (max-height: 575px) and (min-width:${({theme}) => theme.LARGE}) {
    height: 100vh;
    padding-top: 10px;
    overflow-y: scroll;
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
      color: var(--highlights);
    }
  }
  p {
    color: var(--subtitle);
    font-size: 18px;
    letter-spacing: 2px;
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_LARGE}) {
    padding-top: 10px;
  }
  @media (max-width: ${({ theme }) => theme.SMALL}) {
    padding-top: 5px;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
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
      width: 200px;
      padding: 10px;
      background-color:var(--card_background);
      border-radius: 5px;
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      border: 2px solid var(--card_border);
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
      p{
        font-weight: bold;
        font-family: "League Spartan", sans-serif;
       
      }
    }
    @media (max-width: ${({ theme }) => theme.LARGE}) {
      justify-content: center;
    }
    @media (max-width: ${({ theme }) => theme.SMALL}) {
      
      gap: 5px;
      justify-content: center;

      div{
        width: 140px;
        p{
          flex: 1;
          word-break: break-all;
          font-size: 11px;
        }
        
      }
    }
    @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
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
  @media (max-width: ${({ theme }) => theme.EXTRA_SMALL}) {
    h3 {
      font-size: 14px;
    }
  }
`;
