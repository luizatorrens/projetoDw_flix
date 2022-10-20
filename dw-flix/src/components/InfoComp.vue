<script>
import MoviesAPI from "../api/movies";
const moviesApi = new MoviesAPI();

export default {
  props: {
    filme: {},
  },
  async created() {
    try {
      this.movies = await moviesApi.getPopular();
    } catch (e) {
      alert("erro");
    }
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
          <h5 class="modal-title" id="exampleModalLabel">{{ filme.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-dark"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-dark">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
