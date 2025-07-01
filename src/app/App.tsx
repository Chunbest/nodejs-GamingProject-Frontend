import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import Home from '../pages/home/home.tsx';
import { Routes, Route } from 'react-router-dom'
import SignUp from '../pages/signup/signup.tsx'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>


		  <Routes>
			  <Route path="/register" element={<SignUp />} />
			  {/* <Route path="/login" element={<LoginPage />} /> ✅ 這行不能漏 */}
		  </Routes>
      <div >
			  <Home />

      </div>

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
