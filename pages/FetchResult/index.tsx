import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import PageButton from '../../src/components/PageButton';

import { MovieData } from '../../src/interfaces/MoviesData';
import { fetchMoviesAndPages } from '../../src/services/api';

const FetchResult: NextPage = () => {
  const [data, setData] = useState<MovieData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const nextPage = () => {
    setPage(page + 1);
  }

  const prevPage = () => {
    if(page>1) setPage(page - 1);
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMoviesAndPages(page);
        setData(result.movies);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  return(
    <>
      <div className="wrapper fetchResultWrapper">
        <div className="container">
          {data && data.length ? (
            data.map((movie: MovieData) => (
              <div className="movieWrapper" key={movie.imdbID}>
                <Image src={movie.Poster} alt={movie.Title} width={130} height={180} />
                <div className="movieTextContainer">
                  <h1>{movie.Title}</h1>
                  <h2>{movie.Year}</h2>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>

        <div className="pagesMarkBox">
          <h1>
            Explore more
          </h1>
          <div className="pageButtonsBox">
            <PageButton onClick={prevPage}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </PageButton>
            <div>
              {page} | {totalPages}
            </div>
            <PageButton onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </PageButton>
          </div>
          </div>
      </div>
    </>
  );
};

export default FetchResult;