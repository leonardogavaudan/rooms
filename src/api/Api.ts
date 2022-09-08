import axios from 'axios';

import { ExplorationPost } from '../models/models';

class Api {
	private BASE_URL = 'http://localhost:4000';

	async getPosts(): Promise<ExplorationPost[]> {
		const response = await axios.get<ExplorationPost[]>(
			`${this.BASE_URL}/exploration-posts`,
		);

		return response.data;
	}

	async createPost(post: string): Promise<ExplorationPost['id']> {
		const response = await axios.post<ExplorationPost['id']>(
			`${this.BASE_URL}/exploration-posts`,
			{
				content: post,
			},
		);

		return response.data;
	}

	async login(username: string, password: string): Promise<string> {
		const response = await axios.post<string>(`${this.BASE_URL}/login`, {
			username,
			password,
		});

		return response.data;
	}

	async register(username: string, password: string): Promise<string> {
		const response = await axios.post<string>(`${this.BASE_URL}/register`, {
			username,
			password,
		});

		return response.data;
	}
}

export default Api;
