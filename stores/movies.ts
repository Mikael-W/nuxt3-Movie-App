import { componentNames } from './../.nuxt/components.d';
import axios from 'axios';
import {defineStore} from 'pinia';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const useMovieStore = defineStore("movie", {
  state: () => ({ 
    totalPages:0,
    data: [],
    img_url: "https://image.tmdb.org/t/p/w500"
  }),
  actions: {
    async getMoviesByType(type: number): Promise<void>{
      await axios.get("https://api.themoviedb.org/3/list/" + type,{
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI`
        }}).then((response) => { this.data = response.data.items})
    },
    async searchMovie(query: string): Promise<void>{
      const moviesLists = await axios.get("https://api.themoviedb.org/3/genre/movie/list", { headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI`
      }})
     const moviesGenres = moviesLists.data.genres;
      const allMovies: any = [];
      for await (const genre of moviesGenres){
        if(genre.id !== 10749){
          axios.get("https://api.themoviedb.org/3/list/" + genre.id,{
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI`
        }}).then((response) => { 
          for (const item of response.data.items) {
            if(item.title.toLowerCase().includes(query)){console.log(item)}
            //allMovies.push(item);
          }
         });
        }
      }
      for await(const item of allMovies) {
        console.log(item);
      }
    },
  }
})