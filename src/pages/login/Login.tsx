import React from 'react';

const Login = () => {
	return (
		<div className="mx-auto my-10 max-w-lg rounded-lg border bg-slate-50 p-8 shadow-2xl md:p-12">
			<section>
				<h3 className="text-2xl font-bold">Welcome to Rooms</h3>
				<p className="pt-2 text-gray-600">Sign in to your account.</p>
			</section>

			<section className="mt-10">
				<form className="flex flex-col" method="POST" action="#">
					<div className="mb-6 rounded bg-gray-200 pt-3">
						<label
							className="mb-2 ml-3 block text-sm font-bold text-gray-700"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="text"
							id="email"
							className="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-800 focus:outline-none"
						/>
					</div>
					<div className="mb-6 rounded bg-gray-200 pt-3">
						<label
							className="mb-2 ml-3 block text-sm font-bold text-gray-700"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="w-full rounded border-b-4 border-gray-300 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-800 focus:outline-none"
						/>
					</div>
					<div className="flex justify-end">
						<a
							href="#"
							className="mb-1 text-sm text-gray-800 hover:text-gray-600 hover:underline"
						>
							Register
						</a>
					</div>
					<div className="flex justify-end">
						<a
							href="#"
							className="mb-6 text-sm text-gray-800 hover:text-gray-600 hover:underline"
						>
							Forgot your password?
						</a>
					</div>
					<button
						className="rounded bg-gray-800 py-2 font-bold text-white shadow-lg transition duration-200 hover:bg-gray-700 hover:shadow-xl"
						type="submit"
					>
						Sign In
					</button>
				</form>
			</section>
		</div>
	);
};

export { Login };
