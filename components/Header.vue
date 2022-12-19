<script>
import { useMovieStore } from "@/stores/movies";


export default {
  setup(){
    const movieStore = useMovieStore();
    return { movieStore }
  },
  data(){
    return{ 
      movie:"",
      year:""
    }
  },
  methods:{
    getResults(){
      this.movieStore.searchMovie("matrix");
    }
  }
}
</script>

<template>
  <div class="header_container">
    <div class="header_container-logo">
       <img src="@/assets/logo/logo.png" alt="steeplix">
     </div>
    <div class="header_container-subtitle">
      Discover the best films for your taste
    </div>
    <form class="header_container--search_input">
      <label for="movie">Film title</label>
      <input type="text" class="search_input-movie" v-model="movie">
      <label for="year">Year</label>
      <input type="text" class="search_input-year" v-model="year">
      <button @click.prevent="getResults()">
        <img src="@/assets/app_icons/chercher.png" alt="">
      </button>
    </form>
  </div>
</template>



<style lang="scss" scoped>
.header_container-logo{
  display: flex;
  justify-content: center;
    img{
      width: 30vw;
     
    }
}
.header_container-subtitle{
  text-align: center;
  font-family: roboto,sans-serif;
  font-weight: bold;
  color:#8273dc;
  font-size: 2.5vw;
}

.header_container--search_input{
  display:flex;
  justify-content:center;
  align-items: center;
  width: 100vw;
  margin-top: 2rem;
    label{ 
      font-size: 1.3vw;
      font-family: roboto,sans-serif;
      
      padding-right:1rem;
    }
    .search_input-movie, .search_input-year{
      background-color:#E2E2E2;
      border-radius:1rem;
      outline: none;
      width: 10vw;
      height: 2rem;
      margin-right: 2rem;
    }
    .search_input-movie{
      width: 20vw;
    }
    button{ 
      background-color: #E2E2E2;
      border: none;
      cursor: pointer;
        img{
          height: 2vw;
        }
    }

}


  
</style>