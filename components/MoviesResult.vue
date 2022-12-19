<script>
import { useMovieStore } from '~~/stores/movies';

export default {
  setup(){
    const movieStore = useMovieStore();
    return { movieStore }
  },
  data(){
    return { 
      currentPage: 1,
      itemsPerPage: 10,
      resultCount: 0
    } 
  },
  methods: {
    setPage: function(pageNumber) {
      this.currentPage = pageNumber
    },
  },
  computed:{
    totalPages() {
        if (this.resultCount == 0){
          return 1
        }
        else {
        return Math.ceil(this.resultCount / 10)
      }},
    paginate(){
          this.resultCount = this.movieStore.data.length
          if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
          }
          let index = this.currentPage * this.itemsPerPage - this.itemsPerPage
          return this.movieStore.data.slice(index, index + this.itemsPerPage)
      }
    },
    }
</script>

<template>
  <div class="container">
    <div class="movie"
      v-for="(movie) in paginate" :key="movie.id"
      >
      <img class="movie_poster" :src="movieStore.img_url + movie.poster_path" alt="">
      <div class="movie_infos">
        <div class="title">{{movie.title}}</div>
        <div class="release"> <span class="movie_infos-title">Release date:</span>  {{movie.release_date}}</div>
        <div class="overview"><span class="movie_infos-title">Overview:</span>  {{movie.overview}}</div>
        <div class="vote"> <span class="movie_infos-title">Average:</span>   {{movie.vote_average}}</div>
        <div class="genres">
          <span class="movie_infos-title">Genres:</span>
          <span v-for="(genre, index) in movie.genre_ids" :key="index">{{genre}}</span>
        </div>
      </div>
    </div>
    <div class="container_buttons">
      <button v-for="(pageNumber, index) in totalPages" :key="index"
      id="button"  
      @click="setPage(pageNumber)" 
      :class="{
        current: currentPage === pageNumber, 
        last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 10), 
        first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 10)}">
        {{ pageNumber }} 
      </button>
    </div>
    
  </div>
</template>



<style lang="scss" scoped>
.container{
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.movie{
  display: flex;
  width: 95%;
  padding:1rem;
  margin-block: 1rem;
  border: 1px solid #8273dc;
  border-radius:1rem;
  box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;    
    .movie_poster{
      width: 15vw;
      border-radius:1rem;
    }
    .movie_infos{
      padding-left:1rem;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      .title {
        font-family: roboto,sans-serif;
        font-weight: bold;
        color: #8273dc;
        font-size: 2rem;
      }
      .release, .genres, .vote, .overview{
        font-family: roboto,sans-serif;
        font-size: 1.2rem;
      }
      .movie_infos-title{
        color:#8273dc;
      }
    } 
    .genres{
      display: flex;
}
}
.movie:hover{
  transform: scale(1.02);
}



.container_buttons{
  display: flex;
    #button{
      font-family: roboto,sans-serif;
      margin: 0.5rem;
      border: none;
      background-color:transparent;
      font-size: 1rem;
      cursor: pointer;
    }
    #button:hover{
      color: #8273dc;
    }
}
</style>