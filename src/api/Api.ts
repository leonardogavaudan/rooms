import axios from 'axios';

class Api {
	private BASE_URL = 'http://localhost:4000';

	async createPost(post: string) {
		return await axios.post(`${this.BASE_URL}/posts`, { post });
	}
}

export default Api;
