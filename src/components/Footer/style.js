import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  p {
    font-family: "League Spartan", sans-serif;
    font-size: 18px;
    span {
      color: var(--highlights);
      font-weight: bold;
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