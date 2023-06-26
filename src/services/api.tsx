import { MoviesApiResponse, MovieData } from '../../src/interfaces/MoviesData';

const apiKey = '1096e5b1';

//fetch movies and pages number
export const fetchMoviesAndPages = async (page: number): Promise<{ movies: MovieData[], totalPages: number }> => {
  try {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${page}`;
    
    const response = await fetch(url, {
      next: {
        revalidate: 10
      },
      cache: 'no-store'
    });

    const data: MoviesApiResponse = await response.json();
    
    if (data.Response === 'True') {
      const movies = data.Search || [];
      const totalPages = parseInt(data.totalResults) / 10; // Assuming 10 movies per page
      return { movies, totalPages };
    } else {
      throw new Error('API request failed');
    }
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};
