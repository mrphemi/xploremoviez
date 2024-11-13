import { Outlet, Link } from "react-router-dom";

const categories = [
	{ name: "popular", path: "/categories/popular" },
	{ name: "top rated", path: "/categories/top_rated" },
	{ name: "upcoming", path: "/categories/upcoming" },
];

export default function Root() {
	return (
		<div className="flex">
			<div className="basis-1/5">
				<h1>Xploremoviez</h1>
				<div>
					{/* <form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form> */}
				</div>
				<nav>
					<ul>
						{categories.map((category) => (
							<li key={category.path}>
								<Link to={category.path}>{category.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className="border basis-4/5 min-h-dvh">
				<Outlet />
			</div>
		</div>
	);
}
