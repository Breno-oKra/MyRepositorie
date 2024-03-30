import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: start;
  border-bottom: 1px solid #40598c68;
  padding-bottom: 10px;
  > img {
    width: 60px;
    min-width: 60px;
    object-fit: cover;
    border-radius: 10px;
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
      > p {
        font-size: 10px;
      }
    }
  }
  @media (max-width: 210px) {
    flex-direction: column;
  }
`;
export const HeaderInfos = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  font-size: 12px;
  p {
    color: #e9ecef;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
    gap: 0;
    justify-content: space-between;
    font-size: 11px;
  }
`;