import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Root from "./routes/root";
import Movie, { loader as movieLoader } from "./routes/movie";
import Categories, { loader as categoriesLoader } from "./routes/categories";
import ErrorPage from "./error-page";

import "./index.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 10,
		},
	},
});

// child routes
// movies
// categories
// genres

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "categories/:category",
				element: <Categories />,
				loader: categoriesLoader(queryClient),
			},
			// {
			// 	path: "genres/:genre",
			// 	element: <Movies />,
			// },
			{
				path: "movie/:movieId",
				element: <Movie />,
				loader: movieLoader(queryClient),
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
