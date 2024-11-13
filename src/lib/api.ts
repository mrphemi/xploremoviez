const baseURL = "https://api.themoviedb.org/3";
// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=10';

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTBjZTc1MzIzYjkzZGU1MzExODQ2NzJhZWViM2JlNiIsIm5iZiI6MTczMTI1NDYzMi44MDI4MzE0LCJzdWIiOiI1Y2EzNzM2YTkyNTE0MTQwY2Y0OThkOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.X7AAaCq_ZDJrblgltQeHZ_2Daizbj7CjpHqtzPb_P6Q",
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
