import axios from 'axios';

class Api {
	private BASE_URL = 'https://localhost:4000';

	async createPost(post: string) {
		return await axios.post(`${this.BASE_URL}/posts`, { post });
	}
}

export default Api;
