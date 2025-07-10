// Root component + router provider

import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import '../App.css';
import { Routes, Route } from 'react-router-dom'
import Header from '../components/layout/header.tsx';
import SignUp from '../features/auth/components/registerform.tsx'; // 引入註冊頁面元件

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* 網站導覽列 - 固定在頁面頂部 */}
			<Header />

			{/* 路由設定區域 - 根據 URL 顯示對應的頁面元件 */}
			<Routes>
				{/* 註冊頁面路由 - 當 URL 為 /register 時顯示註冊表單 */}
				<Route path="/register" element={<SignUp />} />
				{/* 登入頁面路由 - 待實作 */}
				{/* <Route path="/login" element={<LoginPage />} /> ✅ 這行不能漏 */}
			</Routes>

			{/* 其他頁面內容區域 */}
			{/* 可以在這裡加入首頁、商品頁等其他路由 */}

			{/* 範例：Vite 和 React 的 logo 連結（已註解） */}
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
