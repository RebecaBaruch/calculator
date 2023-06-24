import { forwardRef  } from "react";
import { ResultArea, ScreenContainer, ValuesInput } from "./styles";

import { ScreenProps } from "../../../interfaces/CalculatorProps";

const ResultScreen = forwardRef<HTMLDivElement, ScreenProps>(
  function ResultScreen({ value, children, inputRef, resultAreaRef, onChange }, ref) {
    return (
      <ScreenContainer>
        <ValuesInput 
          value={value} 
          ref={inputRef as React.RefObject<HTMLInputElement>} 
          onChange={onChange} 
        />
        <ResultArea ref={resultAreaRef as React.RefObject<HTMLDivElement>}>
            {children}
        </ResultArea>
      </ScreenContainer>
    );
  }
);
  
  export default ResultScreen;