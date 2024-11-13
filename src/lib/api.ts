const baseURL = "https://api.themoviedb.org/3";
// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=10';

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer token!",
	},
};

export const getCategory = async (category: string, page?: number) => {
	const response = await fetch(`${baseURL}/movie/${category}?page=${page ?? 1}`, options);
	return response.json();
};

export const getMovie = async (movieId: string) => {
	const response = await fetch(
		`${baseURL}/movie/${movieId}?append_to_response=credits,images`,
		options
	);
	return response.json();
};
