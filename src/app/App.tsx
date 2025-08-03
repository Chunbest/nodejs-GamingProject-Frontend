import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import '../styles/globals.css';
import { Routes, Route } from 'react-router-dom'
import Header from '../components/layout/header.tsx';
import SignUp from '../pages/auth/components/Registerform.tsx'; // 引入註冊頁面元件
import { Toaster } from "@/components/ui/toaster"


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* 網站導覽列 - 固定在頁面頂部 */}
			<Header />
			<main>
				<section className="w-full overflow-hidden relative bg-black-500">
										<div className="text-center m-0 bg-gray-100 border border-gray-300 text-gray-800 px-4 py-3 rounded">
						<strong className="font-semibold">🎉 周年慶！滿千送百，精美小禮加碼送～ 🎉</strong>
					</div>

					{/* 手動加左右箭頭或 dot */}
				</section>
			</main>
			{/* Toast 通知組件 */}
			<Toaster />
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
