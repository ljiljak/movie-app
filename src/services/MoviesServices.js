import axios from 'axios'

const axios = Axios.create({
	baseURL: 'http://localhost:3000/api'
})

export default {
	store: function(movie) {
		return axios.post('/api/movies', movie)
	},

	index() {
		return axios.get('/api/movies')
	}
}