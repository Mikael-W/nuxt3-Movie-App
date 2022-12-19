<script lang="ts">
import { useMovieStore } from "@/stores/movies";

  export default {
    setup(){
      const movieStore = useMovieStore();
      return { movieStore }
    },
  methods: {
    getAllMoviesType(movieType: number){
      this.movieStore.getMoviesByType(movieType);
      this.$emit('typeSelected', {close: true, loading:true})
    }
  }
}
</script>

<template>
  <div class="movies_container">
    <div class="movies_container-type">
      <div class="movie_card" @click="getAllMoviesType(28)">
        <img src="@/assets/movie_icons/action.png" alt="film d'action">
        <div class="movie_card-type">Action</div>
      </div>
      <div class="movie_card" @click="getAllMoviesType(14)">
        <img src="@/assets/movie_icons/fantaisie.png" alt="film fantaise">
        <div class="movie_card-type">Fantaisy</div>
      </div>
      <div class="movie_card" @click="getAllMoviesType(35)">
        <img src="@/assets/movie_icons/comedie.png" alt="comedie">
        <div class="movie_card-type">Comedy</div>
      </div>
    </div>
    <div class="movies_container-type">
      <div class="movie_card" @click="getAllMoviesType(80)">
        <img src="@/assets/movie_icons/policier.png" alt="film policier">
        <div class="movie_card-type">Crime</div>
      </div>
      <div class="movie_card" @click="getAllMoviesType(10752)">
        <img src="@/assets/movie_icons/guerre.png" alt="war movie">
        <div class="movie_card-type">War</div>
      </div>
      
      <div class="movie_card" @click="getAllMoviesType(99)">
        <img src="@/assets/movie_icons/documentaire.png" alt="film documentaire">
        <div class="movie_card-type">Documentary</div>
      </div>
    
    </div>
    <div class="movies_container-type">
      <div class="movie_card" @click="getAllMoviesType(53)">
        <img src="@/assets/movie_icons/thriller.png" alt="thriller movie">
        <div class="movie_card-type">Thriller</div>
      </div>
      <div class="movie_card" @click="getAllMoviesType(37)">
        <img src="@/assets/movie_icons/western.png" alt="western movie">
        <div class="movie_card-type">Western</div>
      </div>
      <div class="movie_card"  @click="getAllMoviesType(10402)">
        <img src="@/assets/movie_icons/musique.png" alt="Music movie">
        <div class="movie_card-type">Music</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movies_container-type{
  display: flex;
  justify-content: space-around;
    .movie_card{
      display: flex;
      flex-direction: column;
      text-align:center;
      padding: 1rem;
      margin: 4rem 1rem 1rem 1rem;
      border: 1px solid #8273dc;
      border-radius:1rem;
      box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
       
      cursor: pointer;
      img{ 
         width: 15vw;
      }
      .movie_card-type{
        font-size:1.5rem;
      }
    }
    .movie_card:hover{
      transform: scale(1.1);
    }
    
}

</style>