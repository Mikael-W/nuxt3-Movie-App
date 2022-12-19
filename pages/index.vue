<script>

  export default {
    data(){
      return{ 
        isClose: false,
        isLoading: false
      }
    },
    methods: {
      hiddenMoviesTypes(value){
        this.isClose = value.close;
        this.isLoading = value.loading;
      },
      runLoader(loaderValue){
        this.isLoading = loaderValue.loading
        this.isClose = loaderValue.close;
      }
    }
  }

</script>

<template>
  <Header @startLoading="runLoader" />
  <MovieType @typeSelected="hiddenMoviesTypes" v-if="isClose === false" />
  <MoviesResult v-if="isClose === true" @stopLoading="runLoader" />
  <Loader v-if="isLoading === true"/>
</template>

<style lang="scss">
body{ 
  background-color: #E2E2E2;
}
</style>