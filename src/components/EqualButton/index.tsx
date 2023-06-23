import { MouseEventHandler, ReactNode, ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface EqualProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick: React.MouseEventHandler<HTMLElement>;
}

export default function EqualButton({children, onClick, ...rest}: EqualProps): JSX.Element{
    return(
        <Button {...rest} onClick={onClick}>{children}</Button>
    )
}