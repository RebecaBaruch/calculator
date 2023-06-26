import { ReactNode } from 'react';

export interface MovieData{
    imdbID: string;
    Title: string;
    Plot: string;
    Year: string;
    Poster: string;
    [key: string]: any;
    Source: string;
    Value: string;
}

export interface PageBtnProps{
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export interface MoviesApiResponse {
    Search: MovieData[];
    totalResults: string;
    Response: 'True' | 'False';
    Error?: string;
  }
  