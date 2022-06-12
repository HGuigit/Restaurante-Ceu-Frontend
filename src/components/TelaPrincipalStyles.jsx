import React from 'react'

import {styled} from "@mui/system";
import TelaPrincipal from './TelaPrincipal';

const Div = styled('div') ({
    background: "white",
    color: "blue",
    fontWeight: "bold",
    fontSize: "2em",
});

const Div2 = styled('div') ({
    background: "#eee",
    color: "yellow",
    fontWeight: "bold",
    fontSize: "5em",
});

const TelaPrincipalStyles = () => {

    return {Div, Div2};
}

export default TelaPrincipalStyles;
