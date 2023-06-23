import { ReactNode } from "react";
import { ResultArea, ScreenContainer, ValuesInput } from "./styles";


interface ScreenProps {
    value?: string | number;
    children?: ReactNode;
}

export default function ResultScreen({value, children}: ScreenProps): JSX.Element{
    return(
        <ScreenContainer>
            <ValuesInput value={value} />
            <ResultArea>
                {children}
            </ResultArea>
        </ScreenContainer>
    )
}