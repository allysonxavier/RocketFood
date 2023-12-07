import { createGlobalStyle } from "styled-components";
import T from "./index";
export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body{
    background-color: ${T.colors.DARK_400};
-webkit-font-smoothing: antialiased;
}
body, input, button, textarea{
    font-family: 'Roboto, sans-serif';   
    font-weight: ${T.fonts.sizes.regular};
    font-size: ${T.fonts.sizes.xs};
    outline: none;
    color: ${T.colors.LIGHT_400};
}

a{
    text-decoration:none;
    font-family: 'Poppins, sans-serif';
}

    button, a {
        cursor: pointer;
        transition: filter 0.2s ;
    }
    button:hover, a:hover {filter: brightness(0.9)}`;
