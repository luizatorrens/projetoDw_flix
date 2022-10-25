<script>
import CardSerie from "../components/séries/CardSerie.vue";
import InfoComp from "../components/InfoComp.vue";
import SeriesAPI from "../api/series.js";
const seriesApi = new SeriesAPI();

export default {
  components: { CardSerie, Modal: InfoComp },
  data() {
    return {
      series: [],
      serie_selecionada: {}
    };
  },
  async created() {
    try {
      this.series = await seriesApi.getPopular();
    } catch (e) {
      alert("erro");
    }
  },
  methods: {
    selecionaSerie(serie) {
      // Object.assign(this.serie_selecionada, serie);
      this.serie_selecionada = serie
    },
  },
};
</script>
<template>
  <h2 class="fs-1 text-light text-center p-2">Populares</h2>
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

  <Modal :content="serie_selecionada" />

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
  margin-bottom: 0;
}
</style>
