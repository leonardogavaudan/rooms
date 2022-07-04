import Page from '../../components/Page';

const Home = () => {
	return (
		<Page>
			<div className="mb-10 mt-4 text-2xl font-bold">Feed</div>

			<div className="mb-3">{`Write here to share you're looking for:`}</div>

			<textarea
				className="h-32 w-[35rem] border p-3"
				placeholder="Ex: Looking to split a 60 - 80 m² apartment with 1 other person in Paris"
			></textarea>
		</Page>
	);
};

export default Home;
