<script>
import CardMovie from "../components/filmes/CardMovie.vue";
import CardSerie from "../components/séries/CardSerie.vue";
import InfoComp from "../components/InfoComp.vue";

import MoviesAPI from "../api/movies";
const moviesApi = new MoviesAPI();

import SeriesAPI from "../api/series";
const seriesApi = new SeriesAPI();

export default {
  components: { CardMovie, CardSerie, Modal: InfoComp },
  data() {
    return {
      movies: [],
      series: [],
      filme_selecionado: [],
      serie_selecionada: [],
    };
  },
  async created() {
    try {
      this.movies = await moviesApi.getPopular();
      this.series = await seriesApi.getPopular();
    } catch (e) {
      alert("erro");
    }
  },
  methods: {
    selecionaFilme(filme) {
      this.filme_selecionado = filme;
    },
    selecionaSerie(serie) {
      this.serie_selecionada = serie;
    },
  },
};
</script>
<template>
  <h2 class="fs-1 text-light text-center p-2">Filmes</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of movies.slice(0, 6)"
      :key="movie.id"
      :content="movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="selecionaFilme(movie)"
    >
    </CardMovie>
  </div>
  <h2 class="fs-1 text-light text-center p-2">Séries</h2>
  <div class="card-group card-filmes">
    <CardSerie
      v-for="serie of series.slice(0, 6)"
      :key="serie.id"
      :content="serie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="selecionaSerie(serie)"
    />
  </div>

  <Modal :content="filme_selecionado" />
</template>

<style scooped>
.card-filmes {
  background-color: black;
  display: flex;
  flex-wrap: wrap;
}

.card {
  background-color: black;
}
h2 {
  background-color: black;
}
</style>
