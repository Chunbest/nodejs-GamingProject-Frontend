import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import '../styles/globals.css';
import { Routes, Route } from 'react-router-dom'
import Header from '../components/layout/header.tsx';
import SignUp from '../pages/auth/components/Registerform.tsx'; // 引入註冊頁面元件
import { Toaster } from "@/components/ui/toaster"

import Swipe from "../pages/home/banner1.tsx";


import { Button } from "@/components/ui/button" // 匯入自定義的 Button 元件

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* 網站導覽列 - 固定在頁面頂部 */}
			<Header />
	
			<main>
				<section className="max-width overflow-hidden relative bg-black-500">
					{/* 跑馬燈 */}
					<div className="text-center m-0 bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2 ">
						<strong className="font-semibold">🎉 周年慶！滿千送百，精美小禮加碼送～ 🎉</strong>
					</div>
					{/* banner輪播 */}
<Swipe/>
					
					{/* <div className="relative ">
						<Swipe className="aboulate" />
						<div className="z-50 text-center flex flex-col items-center gap-4 px-4">
							<h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-snug">
								電競操控，<span className="text-red-500">極速致勝</span>
							</h1>

							<a
								href="#hot-products"
								className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full text-base sm:text-lg transition-all duration-300"
							>
								立即選購
							</a>
						</div>
					</div> */}

				


					<div className="h-svh w-auto bg-cover bg-center bg-no-repeat bg-[url('/keyboard.jpg')] flex items-start  justify-center px-6">
						<div className="mt-6  text-center flex flex-col items-center gap-6 max-w-3xl">
							<h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
								電競操控，<span className="text-red-500">極速致勝</span>
							</h1>

							<p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
								解鎖最強戰力，探索頂尖電競裝備。現在就開始升級你的戰場體驗。
							</p>

							<a
								href="#products"
								className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition-all duration-200"
							>
								立即選購
							</a>
						</div>

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
