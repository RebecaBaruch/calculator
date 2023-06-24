import { ReactNode } from "react";
import { Button } from "./styles";

interface ClearProps{
    type?: "button";
    clearType: "ce" | "c";
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export default function ClearButton({type, clearType, children, onClick}: ClearProps): JSX.Element{
    return(
        <Button type={type} clearType={clearType} onClick={onClick}>
            {children}
        </Button>
    )
}