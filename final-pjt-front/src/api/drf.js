const HOST = 'http://localhost:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    profile: username => HOST + ACCOUNTS + `profile/${username}/`,
  },
  movies: {
    list: () => HOST + MOVIES,
    movie: TMDBMovieId => HOST + MOVIES + `${TMDBMovieId}/`,
    likeGenre: TMDBGenreId => HOST + MOVIES + `${TMDBGenreId}/genre/`,
  },
}
