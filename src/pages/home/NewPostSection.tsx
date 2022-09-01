interface NewPostSectionProps {
	newPost: string;
	handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleOnClick: (event: React.MouseEvent) => void;
}

const NewPostSection = ({
	newPost,
	handleOnChange,
	handleOnClick,
}: NewPostSectionProps) => {
	return (
		<div>
			<div className="mb-3">{`Write here to share you're looking for:`}</div>

			<form className="flex w-[35rem] flex-col">
				<textarea
					value={newPost}
					onChange={handleOnChange}
					className="mb-4 h-32 border p-3"
					placeholder="Ex: Looking to split a 60 - 80 m² apartment with 1 other person in Paris"
				></textarea>

				<button
					type="submit"
					className="h-9 w-32 self-end rounded border"
					onClick={handleOnClick}
				>
					Post
				</button>
			</form>
		</div>
	);
};

export { NewPostSection };
