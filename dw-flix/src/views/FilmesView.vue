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
      romances: [],
      comedias: [],
      familias: [],
      ficcoes: [],
      filme_selecionado: [],
    };
  },
  async created() {
    try {
      this.movies = await moviesApi.getPopular();
      this.romances = await moviesApi.getRomances();
      this.comedias = await moviesApi.getComedias();
      this.familias = await moviesApi.getFamilias();
      this.ficcoes = await moviesApi.getFiccoes();
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
  <h2 class="fs-1 text-light text-center p-2">Populares</h2>
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
  <h2 class="fs-1 text-light text-center p-2">Comedias</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of comedias.slice(0, 6)"
      :key="movie.id"
      :filme="movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="selecionaFilme(movie)"
    />
  </div>
  <h2 class="fs-1 text-light text-center p-2">Família</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of familias.slice(0, 6)"
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
      v-for="movie of romances.slice(0, 6)"
      :key="movie.id"
      :filme="movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="selecionaFilme(movie)"
    />
  </div>
  <h2 class="fs-1 text-light text-center p-2">Ficção Científica</h2>
  <div class="card-group card-filmes">
    <CardMovie
      v-for="movie of ficcoes.slice(0, 6)"
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
