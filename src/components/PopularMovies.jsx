import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";

const PopularMovies = () => {
  const getPopularMovies = async () => {
    const api = axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = (await api).data;
    console.log(data);
    setPopular(data.results);
  };
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopularMovies();
    console.log(popular);
  }, []);
  return (
    <Wrapper>
      <Splide
        options={{
          type: "loop",
          perPage: 6,
          perMove: 1,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
          wheel: true,breakpoints: {
            640: {
              perPage: 1,
            }
          }
          
        }}
      >
        {popular &&
          popular.map((movie) => {
            return (
              <SplideSlide>
                <Card key={movie.id} movie = {movie}/>
              </SplideSlide>
            );
          })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 10rem;
`;

// const Card = styled.div`
//   min-height: 25rem;
//   border-radius: 1rem;
//   // overflow : hidden;
//   img {
//     border-radius: 1rem;
//     height: 25rem;
//     object-fit: cover;
//   }
// `;

export default PopularMovies;
