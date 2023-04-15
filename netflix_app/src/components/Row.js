import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((Response) => {
      setMovies(Response.data.results);
    });
  }, fetchURL);

  
  const slideLeft = (rowID) => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = (rowID) => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold p-4">{title}</h2>
      <div className="flex relative items-center">
        <div id={"slider"} className="w-full h-full overflow-x-scroll  whitespace-nowrap scrollbar-hide">
          {movies.map((item, id) => (
            <div className="w-180px inline-block relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w300/${item?.backdrop_path}`}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
