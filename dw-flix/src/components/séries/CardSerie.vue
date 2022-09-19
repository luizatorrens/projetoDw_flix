<script>
export default {
  props: {
    serie: {
      type: Object,
    },
  },
  methods: {
    mostrarSerie() {
      alert(this.serie.autor);
    },
  },
};
</script>
<template>
  <div @click="mostrarSerie" class="card m-2">
    <img :src="serie.imagem" class="card-img-top" alt="..." />
    {{ serie.autor }}
  </div>
</template>
