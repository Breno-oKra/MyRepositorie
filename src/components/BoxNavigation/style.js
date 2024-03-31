import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 145px;
  padding: 10px;
  gap: 5px;
  backdrop-filter: blur(50px);
  border-radius: 20px;
  a {
    width: 100%;
    padding-left: 15px;
    font-weight: bold;
    font-size: 23px;
    border-left: 2px solid var(--links);
    transition: 100ms all linear;

    @media (max-width: ${({ theme }) => theme.LARGE}) {
      padding-left: 5px;
    }
  }
  a:hover {
    color:  var(--highlights);
   
  }
  .kong {
    color:  var(--links);
    border-left: 10px solid var(--links);
  }

  @media (max-width:${({ theme }) => theme.EXTRA_LARGE}) {
    gap: 2px;
    justify-content: space-evenly;

    a {
      font-size: 17px;
    }
  }
  @media (max-width:${({ theme }) => theme.LARGE}) {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    padding: 0;
    justify-content: center;
    a {
      border-left: 2px solid  var(--links);
      font-size: 18px;
    }
    .kong {
   
      border-left: 15px solid  var(--links);
    }
  }
  @media (max-width:${({ theme }) => theme.MEDIUM}) {
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
    background-color: ${({ theme }) => theme. BLUE_200_OP};
    backdrop-filter: blur(40px);

    a {
      border-left: none;
      border-bottom: 2px solid  var(--links);
      font-size: 16px;
      text-align: center;
      padding-bottom: 5px;
    }
    .kong {
   
      border-left: none;
      border-bottom: 15px solid  var(--links);
    }
  }
  @media (max-width:${({ theme }) => theme.SMALL}) {

    padding-inline: 10px;
    a {
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
  @media (max-width:${({ theme }) => theme.EXTRA_SMALL} ) {
  
    a {
      font-size: 8px;
      padding-bottom: 15px;
    }
  }
`;
