import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ScreenProps {
    value?: string | number;
    children?: ReactNode;
    inputRef?: React.Ref<HTMLInputElement | null>;
    resultAreaRef?: React.Ref<HTMLDivElement | null>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ValueProps{
    fullWidth?: boolean;
    value: string;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export interface OperatorProps{
    name?: string;
    value: string;
    children?: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export interface EqualProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick: React.MouseEventHandler<HTMLElement>;
}

export interface ClearProps{
    type?: "button";
    clearType: "ce" | "c";
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}