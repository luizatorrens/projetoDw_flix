<script>
import MoviesAPI from "../api/movies";
import SeriesAPI from "../api/series"

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
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ content.title || content.name }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row">
          <div class="col-md-4">
            <img :src="getImageUrl(content.poster_path)" class="card-img-top img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <h5 class="d-flex justify-content-end"> Sinopse: {{ content.overview }}</h5>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  h5 {
    font-size: large;
  }
</style>