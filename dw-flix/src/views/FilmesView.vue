<script>
import CardMovie from "../components/filmes/CardMovie.vue";
import InfoComp from "../components/InfoComp.vue";
import MoviesAPI from "../api/movies";
const moviesApi = new MoviesAPI();

export default {
  components: { CardMovie, Modal: InfoComp },
  data() {
    return {
      movies: [],
      series: [],
      filme_selecionado: {},
    };
  },
  async created() {
    try {
      this.movies = await moviesApi.getPopular();
    } catch (e) {
      alert("erro");
    }
  },
  methods: {
    selecionaFilme(filme) {
      Object.assign(this.filme_selecionado, filme);
    },
  },
};
</script>
<template>
  <h2 class="fs-1 text-light text-center p-2">Comédia</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of movies.slice(0, 6)"
      :key="movie.id"
      :filme="movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="selecionaFilme(movie)"
    />
  </div>
  <h2 class="fs-1 text-light text-center p-2">Suspense</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of movies.slice(0, 6)"
      :key="movie.id"
      :filme="movie"
      @click="selecionaFilme(movie)"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    />
  </div>
  <h2 class="fs-1 text-light text-center p-2">Romance</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of movies.slice(0, 6)"
      :key="movie.id"
      :filme="movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="selecionaFilme(movie)"
    />
  </div>

  <Modal :filme="filme_selecionado" />
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
