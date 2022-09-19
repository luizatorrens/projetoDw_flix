<script>
export default {
  props: {
    filme: {
      type: Object,
    },
  },
  methods: {
    mostrarFilme() {
      alert(this.filme.autor);
    },
  },
};
</script>
<template>
  <div @click="mostrarFilme" class="card m-2">
    <img :src="filme.imagem" class="card-img-top" alt="..." />
    {{ filme.autor }}
  </div>
</template>
