import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;    
    }
    :root{
        --text: #fff;
        --subtitle:#dee2e6;
        --description:#adb5bd;
      
        --info:#00f5d4;
        --info_op:#00f5d4a8;

        --links: #deaaff;
        --highlights: #9b5de5;
        --GRADIENTS-BAckground:  ${({ theme }) => theme.GRADIENTS_100_COLOR};
        --GRADIENTS: ${({ theme }) => theme.GRADIENTS_100};
    }
    html{
        scroll-behavior: smooth;
    }
    html.light{
        --text:#001845;
        --subtitle:#023E7D;
        --description:#024FA2;
        --GRADIENTS-BAckground:  ${({ theme }) => theme.GRADIENTS_200_COLOR};
        --GRADIENTS: ${({ theme }) => theme.GRADIENTS_200};
        --links:#C05CFF;
        --highlights:#B133FF;
        --info:#F67D13;
        --info_op:#023E7D
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
            background: #001845;
        }

        body::-webkit-scrollbar-thumb {
            background-color:  #a663cc; 
           
           
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
