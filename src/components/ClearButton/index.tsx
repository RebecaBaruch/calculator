import { ReactNode } from "react";
import { Button } from "./styles";

interface ClearProps{
    type?: "button";
    clearType: "ce" | "c";
    children: ReactNode;
}

export default function ClearButton({type, clearType, children}: ClearProps): JSX.Element{
    return(
        <Button type={type} clearType={clearType}>
            {children}
        </Button>
    )
}