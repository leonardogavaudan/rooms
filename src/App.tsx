import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Routing } from './enums';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path={Routing.HOME} element={<Home />} />
					<Route path={Routing.ABOUT} element={<About />} />
					<Route path={Routing.LOGIN} element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
