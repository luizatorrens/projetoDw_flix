import axios from "axios";

export default class MoviesAPI {
  async getPopular() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR&page=1"
    );
    return data.results;
  }
}
