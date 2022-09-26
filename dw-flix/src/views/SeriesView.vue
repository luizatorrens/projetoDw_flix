<script>
import CardSerie from "../components/séries/CardSerie.vue";

export default {
  components: { CardSerie },
  data() {
    return {
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
  <h2 class="fs-1 text-light text-center p-2">Romance</h2>
  <div class="card-group card-filmes">
    <CardSerie v-for="serie of series" :key="serie.id" :serie="serie" />
  </div>
  <h2 class="fs-1 text-light text-center p-2">Comédia</h2>
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
