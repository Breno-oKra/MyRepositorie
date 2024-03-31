import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: start;
  border-bottom: 1px solid ${({ theme }) => theme.GRAY_100};
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

    > p {
      font-size: 13px;
      color: var(--description);
      letter-spacing: 1px;
    }
    @media (max-width:  ${({ theme }) => theme.SMALL} ) {
      gap: 5px;

      span {
        font-size: 10px;
      }
      > p {
        font-size: 10px;
      }
    }
  }
  @media (max-width:  ${({ theme }) => theme.EXTRA_SMALL} ) {
    flex-direction: column;
  }
`;
export const HeaderInfos = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  font-size: 12px;
  P{
    font-weight: bold;
  }
  span {
    color:var(--info);
    font-size: 12px;
    padding: 5px;
    border-radius: 10px;
    font-weight: bold;
  }
  @media (max-width:  ${({ theme }) => theme.SMALL} ) {
    flex-wrap: wrap;
    gap: 0;
    justify-content: space-between;
    font-size: 11px;
  }
`;
