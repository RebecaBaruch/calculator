import { type } from "os";
import { Button } from "./styles";

interface ValueProps{
    fullWidth?: boolean;
    value: string;
    onClick: React.MouseEventHandler<HTMLElement>;
}

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