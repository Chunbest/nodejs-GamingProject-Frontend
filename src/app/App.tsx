import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import Home from '../pages/home/home.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* rounter 用路徑 */}
      <div >
        <Home />
      </div>

      {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      <h1>Vite + React</h1>
     
        <h1 className="text-3xl font-bold text-blue-600">
          🛒 電商前端專案啟動成功！
        </h1>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
    </>
  );
}

export default App;
