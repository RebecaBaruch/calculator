import { ReactNode, ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

import { EqualProps } from "../../interfaces/CalculatorProps";

export default function EqualButton({children, onClick, ...rest}: EqualProps): JSX.Element{
    return(
        <Button {...rest} onClick={onClick}>{children}</Button>
    )
}