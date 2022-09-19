<script>
import CardMovie from "../components/filmes/CardMovie.vue";
import CardSerie from "../components/séries/CardSerie.vue";

export default {
  components: { CardMovie, CardSerie },
  data() {
    return {
      movies: [
        {
          id: 1,
          imagem: new URL("../assets/img/enrolados.jpg", import.meta.url).href,
          autor: "Fulano",
        },
        {
          id: 2,
          imagem: new URL("../assets/img/Ameninalivros.jpg", import.meta.url)
            .href,
          autor: "Beltrano",
        },
        {
          id: 3,
          imagem: new URL("../assets/img/ACABANA.jpg", import.meta.url).href,
        },
        {
          id: 4,
          imagem: new URL("../assets/img/enrolados.jpg", import.meta.url).href,
        },
        {
          id: 5,
          imagem: new URL("../assets/img/Ameninalivros.jpg", import.meta.url)
            .href,
        },
        {
          id: 6,
          imagem: new URL("../assets/img/ACABANA.jpg", import.meta.url).href,
        },
      ],
      series: [
        {
          id: 7,
          imagem: new URL("../assets/img/enrolados.jpg", import.meta.url).href,
          autor: "Fulano",
        },
        {
          id: 8,
          imagem: new URL("../assets/img/Ameninalivros.jpg", import.meta.url)
            .href,
          autor: "Beltrano",
        },
        {
          id: 9,
          imagem: new URL("../assets/img/ACABANA.jpg", import.meta.url).href,
        },
        {
          id: 10,
          imagem: new URL("../assets/img/enrolados.jpg", import.meta.url).href,
        },
        {
          id: 11,
          imagem: new URL("../assets/img/Ameninalivros.jpg", import.meta.url)
            .href,
        },
        {
          id: 12,
          imagem: new URL("../assets/img/ACABANA.jpg", import.meta.url).href,
        },
      ],
    };
  },
};
</script>
<template>
  <h2 class="fs-1 text-light text-center p-2">Filmes</h2>
  <div class="card-group card-filmes">
    <CardMovie v-for="movie of movies" :key="movie.id" :filme="movie" />
  </div>
  <h2 class="fs-1 text-light text-center p-2">Séries</h2>
  <div class="card-group card-filmes">
    <CardSerie v-for="serie of series" :key="serie.id" :serie="serie" />
  </div>
</template>

<style scooped>
.card-filmes {
  background-color: black;
}

.card {
  background-color: black;
}
h2 {
  background-color: black;
}
</style>
