import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;    
    }
    :root{
        --text: ${({ theme }) => theme.WHITE};
        --subtitle:${({ theme }) => theme.WHITE_100};
        --description:${({ theme }) => theme.WHITE_200};
        --card_background: ${({ theme }) => theme.BLUE_300_OP};
        --card_border:${({ theme }) => theme.WHITE_OP};
        --info:#00f5d4;
        --info_op:#00f5d4a8;
        --text-mobile: #EF8757;
        --background-mobile: #95390E80;
        --text-mobile-active: #1FFFE1CC;
        --background-mobile-active: #007A6A;
        --links: #deaaff;
        --highlights: #9b5de5;
        --GRADIENTS-BAckground:  ${({ theme }) => theme.GRADIENTS_100_COLOR};
        --GRADIENTS: ${({ theme }) => theme.GRADIENTS_100};
        --background-scroll:${({ theme }) => theme.DARK_BLUE};
        --background-scroll-line: ${({ theme }) => theme.PURPLE_200};
    }
    html{
        scroll-behavior: smooth;
    }
    html.light{
        --text:#001845;
        --subtitle:#3A527E;
        --description:#47649A;
        --card_background:#CCCCCC33;
        --card_border:#00000033;
        --GRADIENTS-BAckground:  ${({ theme }) => theme.GRADIENTS_200_COLOR};
        --GRADIENTS: ${({ theme }) => theme.GRADIENTS_200};
        --links:#C05CFF;
        --highlights:#B133FF;
        --info:#F67D13;
        --info_op:#023E7D;
        
        --background-mobile: #F2A27D80;
        --text-mobile-active: #007A6A;
        --background-mobile-active: #00E0C280;

        --background-scroll:#B2BDBD;

    }
    body{
        color: var(--text);
        background: var(--GRADIENTS-BAckground);
        background:var(--GRADIENTS);
        background-repeat: no-repeat;  
       
        overflow-x: hidden;
  
    }
    body::-webkit-scrollbar {
            width: 12px; 
        }

        body::-webkit-scrollbar-track {
            background:var(--background-scroll);
        }

        body::-webkit-scrollbar-thumb {
            background-color: var(--background-scroll-line); 
           
           
        }
    button,a {
        cursor: pointer;
        transition: filter 0.2s;
        text-decoration: none;
        color:var(--text);
        background: none;
    }
    body, input, button, textarea,select{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
        border: none;
    }  
`;
