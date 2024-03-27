import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;    
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        color: white;
       
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
        color: white;
    }
    body, input, button, textarea,select{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
        border: none;
    }
    button:hover, a:hover{
        transition: brightness(0.9);
    }
   
  
`;
