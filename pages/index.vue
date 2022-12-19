<script>
import { dataToEsm } from '@rollup/pluginutils';

  export default {
    data(){
      return{ 
        isClose: false,
      }
    },
    methods: {
      hiddenMoviesTypes(value){
        this.isClose = value.close;
      }
    }
  }

</script>

<template>
  <Header />
  <MovieType @typeSelected="hiddenMoviesTypes" v-if="isClose == false" />
  <MoviesResult v-if="isClose == true" />
</template>

<style lang="scss">
body{ 
  background-color: #E2E2E2;
}
</style>