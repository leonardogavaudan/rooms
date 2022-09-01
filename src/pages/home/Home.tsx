import { useEffect, useState } from 'react';

import Api from '../../api/Api';
import Page from '../../components/Page';
import { NewPostSection } from './NewPostSection';

const Home = () => {
	const api = new Api();

	const [newPost, setNewPost] = useState<string>('');
	const [posts, setPosts] = useState<string[]>([]);

	useEffect(() => {
		api.getPosts().then((posts) => {
			setPosts(posts.map((post) => post.content));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleNewPost = async (event: React.MouseEvent) => {
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

			<NewPostSection
				newPost={newPost}
				handleOnChange={(e) => setNewPost(e.target.value)}
				handleOnClick={handleNewPost}
			/>

			<div>
				{posts.map((post, index) => (
					<div key={index}>{post}</div>
				))}
			</div>
		</Page>
	);
};

export { Home };
