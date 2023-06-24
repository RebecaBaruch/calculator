import { Button } from "./styles";

import { ValueProps } from "../../interfaces/CalculatorProps";

export default function ValueButton({fullWidth, value, onClick}: ValueProps){
    return(
        <Button 
            fullWidth={fullWidth} 
            type='button'
            value={value} 
            onClick={onClick}
        />
    )
}