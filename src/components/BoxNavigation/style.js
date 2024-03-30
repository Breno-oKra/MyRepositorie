import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 115px;
  padding: 10px;
  gap: 5px;
  a {
    width: 100%;
    color: white;
    padding-left: 15px;
    font-weight: bold;
    font-size: 23px;
    border-left: 2px solid #deaaff;
    transition: 100ms all linear;

    @media (max-width: 1150px) {
      padding-left: 5px;
    }
  }
  a:hover {
    color: #deaaff;
  }
  .kong {
    color: #c77dff;
    border-left: 10px solid #deaaff;
  }

  @media (max-width: 1600px) {
    gap: 2px;
    justify-content: space-evenly;
    a {
      font-size: 17px;
    }
  }
  @media (max-width: 1150px) {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    padding: 0;
    justify-content: center;
    a {
      border-left: 2px solid #deaaff;
      font-size: 18px;
    }
    .kong {
      color: #c77dff;
      border-left: 15px solid #deaaff;
    }
  }
  @media (max-width: 650px) {
    top: initial;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 10;
    gap: 0px;
    flex-direction: row;
    padding-inline: 30px;
    padding-top: 10px;
    align-items: end;
    background-color: #00285542;
    backdrop-filter: blur(40px);
    a {
      border-left: none;
      border-bottom: 2px solid #deaaff;
      font-size: 16px;
      text-align: center;
      padding-bottom: 5px;
    }
    .kong {
      color: #c77dff;
      border-left: none;
      border-bottom: 15px solid #deaaff;
    }
  }
  @media (max-width: 550px) {
    padding-inline: 10px;
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
