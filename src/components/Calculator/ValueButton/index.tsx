import { Button } from "./styles";

import { ValueProps } from "../../../interfaces/CalculatorProps";

export default function ValueButton({fullwidth, value, onClick}: ValueProps){
    return(
        <Button 
            fullwidth={fullwidth} 
            type='button'
            value={value} 
            onClick={onClick}
        />
    )
}