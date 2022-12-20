import axios from 'axios';
import {defineStore} from 'pinia';


export const useMovieStore = defineStore("movie", {
  state: () => ({ 
    
    data: [],
    genres: [],
    img_url: "https://image.tmdb.org/t/p/w500"
  }),
  actions: {
      async convertGenreId(): Promise<void>{
        await axios.get("https://api.themoviedb.org/3/genre/movie/list",{
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI`
          }}).then(response => {
       this.genres = response.data.genres;
        }) 
  },
    async getMoviesByType(type: number): Promise<void>{
      try{
        await axios.get("https://api.themoviedb.org/3/list/" + type,{
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI`
          }}).then((response) => { this.data = response.data.items});
      }catch(e){
        console.error(e)
      }
    },
    async searchMovie(query: string, year: number): Promise<void>{
      try {
        await axios.get("https://api.themoviedb.org/3/search/movie" , { params: { query: query, year: year }, headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI`
        }}).then(response => this.data =response.data.results)
      }catch(e){
        console.error(e)
      }
   
    },
  }
})

