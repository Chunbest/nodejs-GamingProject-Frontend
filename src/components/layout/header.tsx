// 引入 Navbar 元件
import Navbar from "@/components/layout/navbar"
// 引入 Logo 元件
import Logo from "@/components/ui/Logo"
// 引入 Search Input 元件
import { Input } from "@/components/ui/input"




export default function Header() {
	return (
		<>
			<nav className="container my-auto">
				<div className="border border-blue-500 flex justify-between items-center">
					{/* 左邊: logo+search */}
					<div className="  border border-green-500 flex items-center text-black font-bold text-xl ">
						{/* Logo 區塊 */}
						<Logo />
						{/* search 區塊 */}
						<form role="search" className="flex items-center space-x-2">
							<Input type="search" placeholder="Search" className="w-48 sm:hidden" />
						</form>
					</div>
					{/* 右邊: 導覽項目+登入註冊 */}
					<Navbar />
				</div>

			</nav>
		</>
	)
}