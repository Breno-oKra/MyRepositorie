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
  @media (max-height: 425px) and (min-width:${({theme}) => theme.LARGE}) {
    height: 100vh;
    padding-top: 10px;
    overflow-y: scroll;
  }
`;

export const Boxs = styled.div`
  position: relative;
  width: 70%;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  margin-bottom: 100px;
  >a {
    font-weight: bold;
    font-size: 18px;
  }

  padding-top: 100px;
  @media (max-width: 1600px) {
    padding-top: 80px;
  }
  @media (max-width: 1150px) {
    width: 100%;
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
