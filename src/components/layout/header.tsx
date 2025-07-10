// 引入全域樣式
import "../../index.css"
// 引入 Navbar 元件
import Navbar from "@/components/layout/navbar"
// 引入 Logo 元件
import Logo from "@/components/ui/Logo"
// 引入 Search Input 元件
import { Input } from "@/components/ui/input"



export default function Header() { 
	return (
		<>
			<header className="flex items-center justify-between flex-wrap bg-gray-100 px-4 py-2 shadow-md">
			{/* 左邊: logo+search */}
			<div className="flex items-center text-black font-bold text-xl ">
				{/* Logo 區塊 */}
				<Logo />
				{/* search 區塊 */}
				<form role="search" className="flex items-center space-x-2">
					<Input type="search" placeholder="Search" className="w-48 sm:hidden" />
				</form>
			</div>
			<Navbar/>
			</header>
		</>
	)
}