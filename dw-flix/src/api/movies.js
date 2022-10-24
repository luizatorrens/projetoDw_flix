import axios from "axios";

export default class MoviesAPI {
  async getPopular() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR&page=1"
    );
    return data.results;
  }
  async getRomances() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR&page=1&with_genres=10749&adult=false"
    );
    return data.results;
  }
  async getComedias() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR&page=1&with_genres=35"
    );
    return data.results;
  }
  async getFamilias() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR&page=1&with_genres=10751"
    );
    return data.results;
  }
  async getFiccoes() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR&page=1&with_genres=878"
    );
    return data.results;
  }
}
