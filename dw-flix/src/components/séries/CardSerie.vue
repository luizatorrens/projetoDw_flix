<script>
export default {
  props: {
    content: {
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
  <div @click="mostrarSerie" class="card m-2">
    <img :src="getImageUrl(content.poster_path)" class="card-img-top" alt="..." id="card"/>
    {{ content.name }}
  </div>
</template>

<style>
#card{position:relative}
#card:hover{top:-10px;box-shadow:0 10px 10px rgb(0, 0, 0)}
</style>