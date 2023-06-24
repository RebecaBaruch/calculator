import { Button } from "./styles";

import { ClearProps } from "../../../interfaces/CalculatorProps";

export default function ClearButton({type, cleartype, children, onClick}: ClearProps): JSX.Element{
    return(
        <Button 
            type={type} 
            cleartype={cleartype} 
            onClick={onClick}
        >
            {children}
        </Button>
    )
}