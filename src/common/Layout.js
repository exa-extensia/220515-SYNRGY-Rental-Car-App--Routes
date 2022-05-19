import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div>
			<nav>
				Nav
				<ol>
					<Link to="/">Home</Link>
				</ol>
			</nav>
			<Outlet />
		</div>
	);
}