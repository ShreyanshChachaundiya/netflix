import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      setMovies(Response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[440px] text-white relative ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[440px]  bg-gradient-to-r from-black z-[1] top-[-23px]"></div>
        <img
          className="w-full h-full object-cover top-[-23px] absolute"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[30%] p-4 z-[2]">
        <h1 className="text-3xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black py-2 px-5 border-gray-300  cursor-pointer">
              Play
            </button>
            <button className="text-white ml-4 border border-gray-300 py-2 px-5">Watch later</button>
          </div>
        <p className="text-gray-400">Released: {movie?.release_date}</p>
        <p className="w-full text-gray-200 w-[50%]">{truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
