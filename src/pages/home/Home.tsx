import { useState } from 'react';

import Api from '../../api/Api';
import Page from '../../components/Page';

const Home = () => {
	const [newPost, setNewPost] = useState<string>('');
	const [posts, setPosts] = useState<string[]>([]);
	const api = new Api();

	const handleClick = async (event: React.MouseEvent) => {
		event.preventDefault();
		const postCreated = await api.createPost(newPost);

		if (postCreated) {
			setPosts([...posts, newPost]);
			setNewPost('');
		}
	};

	return (
		<Page>
			<div className="mb-10 mt-4 text-2xl font-bold">Feed</div>

			<div>
				<div className="mb-3">{`Write here to share you're looking for:`}</div>

				<form className="flex w-[35rem] flex-col">
					<textarea
						value={newPost}
						onChange={(e) => setNewPost(e.target.value)}
						className="mb-4 h-32 border p-3"
						placeholder="Ex: Looking to split a 60 - 80 m² apartment with 1 other person in Paris"
					></textarea>
					<button
						type="submit"
						className="h-9 w-32 self-end rounded border"
						onClick={(e) => handleClick(e)}
					>
						Post
					</button>
				</form>
			</div>

			<div>
				{posts.map((post, index) => (
					<div key={index}>{post}</div>
				))}
			</div>
		</Page>
	);
};

export default Home;
