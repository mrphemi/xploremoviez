import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { QueryClient, queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { getMovie } from "../lib/api";

export const movieQuery = (movieId: string) =>
	queryOptions({
		queryKey: ["movie", movieId],
		queryFn: async () => {
			const movie = await getMovie(movieId);
			if (!movie) {
				throw new Response("", {
					status: 404,
					statusText: "Not Found",
				});
			}
			return movie;
		},
	});

export const loader =
	(queryClient: QueryClient) =>
	async ({ params }: LoaderFunctionArgs) => {
		if (!params.movieId) {
			throw new Error("No contact ID provided");
		}
		await queryClient.ensureQueryData(movieQuery(params.movieId));
		return { movieId: params.movieId };
	};

export default function Movie() {
	const { movieId } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
	const { data } = useSuspenseQuery(movieQuery(movieId));

	console.log({ data });
	return (
		<div>
			<h1>{data.original_title}</h1>
		</div>
	);
}
