import { TextProps } from "../../../interfaces/CalculatorProps";
import { Wrapper, Title, Text } from "./styles";



export default function TextContainer({children, title}: TextProps): JSX.Element{
    return(
        <Wrapper>
            <Title>{title}</Title>
            <Text> {children}</Text>
        </Wrapper>
    )
}