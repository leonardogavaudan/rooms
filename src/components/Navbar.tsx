import { Link } from 'react-router-dom';
import { Routing } from '../enums';

const Navbar = () => {
	return (
		<nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link to={Routing.HOME} className="flex items-center">
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Rooms
					</span>
				</Link>

				<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
					<ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
						<li>
							<Link
								to={Routing.HOME}
								className="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={Routing.ABOUT}
								className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
