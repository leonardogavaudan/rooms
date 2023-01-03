import { Link } from 'react-router-dom';

import { Routing } from '../enums';

const Navbar = () => {
	return (
		<nav className="border-gray-200 bg-slate-900 px-2 py-2.5 sm:px-4">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link to={Routing.HOME} className="flex items-center">
					<span className="self-center whitespace-nowrap text-xl font-semibold text-white">
						Rooms
					</span>
				</Link>

				<div className="hidden w-full md:block md:w-auto">
					<ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
						<li>
							<Link
								to={Routing.HOME}
								className="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white md:bg-transparent md:p-0"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={Routing.ABOUT}
								className="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white md:bg-transparent md:p-0"
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

export { Navbar };
