export const API_KEY = '2c94c607cc74978cfb9fcf6f2093fd6e'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const LANGUAGE = 'en-US'
export const IMAGE_PREVIEW = 'https://image.tmdb.org/t/p/w400'

export const TOP_RATED = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`
export const POPULAR_MOVIES = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`
export const SEARCH_MOVIE = `${BASE_URL}/search/movie?&api_key=${API_KEY}&language=${LANGUAGE}&query=`

// export const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
// export const IMGPATH = "https://image.tmdb.org/t/p/w1280"