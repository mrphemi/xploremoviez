import { QueryClient, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import { getCategory } from "../lib/api";

import Movies from "../Movies";

export const moviesQuery = (category: string, page?: number) =>
	queryOptions({
		queryKey: ["category", category],
		queryFn: async () => {
			const movies = await getCategory(category, page);
			if (!movies) {
				throw new Response("", {
					status: 404,
					statusText: "Not Found",
				});
			}
			return movies;
		},
	});

export const loader =
	(queryClient: QueryClient) =>
	async ({ params, request }: LoaderFunctionArgs) => {
		const searchParams = new URL(request.url).searchParams;
		const page = searchParams.get("page");
		if (!params.category) {
			throw new Error("Error");
		}
		await queryClient.ensureQueryData(moviesQuery(params.category));
		return { category: params.category, page: page };
	};

export default function Categories() {
	const { category, page } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
	const { data } = useSuspenseQuery(moviesQuery(category, page ? Number(page) : undefined));

	console.log({ data });

	return (
		<>
			<Movies category={category} />
		</>
	);
}
