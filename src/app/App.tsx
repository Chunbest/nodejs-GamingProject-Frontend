// Root component + router provider

import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import '../App.css';
import { Routes, Route } from 'react-router-dom'
import Header from '../components/layout/header.tsx';
import SignUp from '../features/auth/pages/register.tsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/register" element={<SignUp />} />
				{/* <Route path="/login" element={<LoginPage />} /> ✅ 這行不能漏 */}
			</Routes>
		
				
		
		

			{/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

		</>
	);
}

export default App;
