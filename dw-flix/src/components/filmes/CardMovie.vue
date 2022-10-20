<script>
export default {
  props: {
    filme: {
      type: Object,
    },
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <div @click="mostrarFilme" class="card m-2">
    <slot></slot>
    <img :src="getImageUrl(filme.poster_path)" class="card-img-top" alt="..." />
    {{ filme.title }}
  </div>
</template>
