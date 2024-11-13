// import { useSearchParams } from "react-router-dom";

type MovieListProps = {
	category: string;
	// movies: any[];
};

const MovieList = ({ category }: MovieListProps) => {
	// const [, setSearchParams] = useSearchParams();

	return (
		<div className="p-4">
			<h1 className="font-bold text-5xl capitalize">{category} movies</h1>

			{/* <button
				className="border-2 border-black"
				onClick={() => {
					setSearchParams({ page: "10" });
				}}
			>
				Page 10
			</button> */}
		</div>
	);
};

export default MovieList;
