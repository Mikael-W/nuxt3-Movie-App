<template>
  <div class="movies_container">
    <div class="movies_container-type">
      <div class="movie_card">
        <img src="@/assets/movie_icons/action.png" alt="film d'action">
        <div class="movie_card-type">Action</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/aventure.png" alt="film d'aventure">
        <div class="movie_card-type">Aventure</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/animation.png" alt="film d'animation">
        <div class="movie_card-type">Animation</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/comedie.png" alt="comedie">
        <div class="movie_card-type">Comedie</div>
      </div>
    </div>
    <div class="movies_container-type">
      <div class="movie_card">
        <img src="@/assets/movie_icons/policier.png" alt="film policier">
        <div class="movie_card-type">Policier</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/documentaire.png" alt="film documentaire">
        <div class="movie_card-type">Documentaire</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/drama.png" alt="film dramatique">
        <div class="movie_card-type">Drama</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/famille.png" alt="film familliale">
        <div class="movie_card-type">Famille</div>
      </div>
    </div>
    <div class="movies_container-type">
      <div class="movie_card">
        <img src="@/assets/movie_icons/fantaisie.png" alt="film fantaise">
        <div class="movie_card-type">Fantaisie</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/histoire.png" alt="film historique">
        <div class="movie_card-type">Histoire</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/horror.png" alt="film d'horreur">
        <div class="movie_card-type">Horreur</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/musique.png" alt="comedie musical">
        <div class="movie_card-type">Musique</div>
      </div>
    </div>
    <div class="movies_container-type">
      <div class="movie_card">
        <img src="@/assets/movie_icons/mystere.png" alt="film mystere">
        <div class="movie_card-type">Mystere</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/romance.png" alt="film romantique">
        <div class="movie_card-type">Romance</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/science-fiction.png" alt="film de science fiction">
        <div class="movie_card-type">Sci-fi</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/film-tv.png" alt="film tv">
        <div class="movie_card-type">Film tv</div>
      </div>
    </div>
    <div class="movies_container-type">
      <div class="movie_card">
        <img src="@/assets/movie_icons/thriller.png" alt="thriller">
        <div class="movie_card-type">Thriller</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/guerre.png" alt="film de guerre">
        <div class="movie_card-type">Guerre</div>
      </div>
      <div class="movie_card">
        <img src="@/assets/movie_icons/western.png" alt="western">
        <div class="movie_card-type">Western</div>
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
    }
    .movie_card:hover{
      transform: scale(1.1);
    }
}

</style>