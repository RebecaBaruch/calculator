import { ReactNode, forwardRef  } from "react";
import { ResultArea, ScreenContainer, ValuesInput } from "./styles";


interface ScreenProps {
    value?: string | number;
    children?: ReactNode;
    inputRef?: React.Ref<HTMLInputElement | null>;
    resultAreaRef?: React.Ref<HTMLDivElement | null>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

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