<script>
export default {
  props: {
    serie: {
      type: Object,
    },
  },
  methods: {
    mostrarSerie() {
      alert(this.serie.title);
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <div @click="mostrarSerie" class="card m-2">
    <img :src="getImageUrl(serie.poster_path)" class="card-img-top" alt="..." />
    {{ serie.title }}
  </div>
</template>
