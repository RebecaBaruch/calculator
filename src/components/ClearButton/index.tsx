import { Button } from "./styles";

import { ClearProps } from "../../interfaces/CalculatorProps";

export default function ClearButton({type, clearType, children, onClick}: ClearProps): JSX.Element{
    return(
        <Button 
            type={type} 
            clearType={clearType} 
            onClick={onClick}
        >
            {children}
        </Button>
    )
}