import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ScreenProps {
    value?: string | number;
    children?: ReactNode;
    inputRef?: React.Ref<HTMLInputElement | null>;
    resultAreaRef?: React.Ref<HTMLDivElement | null>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ValueProps{
    fullwidth?: boolean;
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
    cleartype: "ce" | "c";
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export interface TextProps{
    children?: ReactNode;
    title?: ReactNode;
}

export interface MyLinkProps extends TextProps{
    href: string;
}

export interface BackspaceProps{
    onClick: React.MouseEventHandler<HTMLElement>;
}