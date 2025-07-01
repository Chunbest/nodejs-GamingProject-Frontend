//從專案根目錄引入
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User } from "lucide-react"
import Logo from "@/components/ui/Logo"
import { LoginRegisterButton } from "@/components/ui/LoginRegisterButton"

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<>
			<nav className="flex items-center justify-between flex-wrap bg-gray-100 px-4 py-2 shadow-md">
				{/* 導覽連結 - 大螢幕顯示 */}
				<div className="flex items-center text-black font-bold text-xl ">
					{/* Logo 區塊 */}
					<Logo />
					<form role="search" className="flex items-center space-x-2">
						<Input type="search" placeholder="Search" className="w-48 sm:hidden" />
					</form>
				</div>
				<div className="text-sm flex sm:flex-col lg:flex-row items-start lg:items-center justify-end gap-[2em] lg:mx-4 sm:hidden">

					<a href="#" className="text-gray-700 hover:text-blue-700 py-[5px] ">產品分類</a>
					<a href="#" className="text-gray-700 hover:text-blue-700 py-[5px]">關於我們</a>
					<a href="#" className="text-gray-700 hover:text-blue-700  py-[5px]">電競專欄</a>
					<a href="#" className="text-gray-700 hover:text-blue-700 flex items-center py-[5px]"><ShoppingCart className="h-5 w-5 " /></a>
					{/* 登入註冊按鈕 */}
					<LoginRegisterButton href="/login" />

				</div>
				{/* 小螢幕選單按鈕 - 使用 Sheet */}
				<div className="hidden ">
					<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon">
								<Menu className="w-6 h-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="top" className="p-4 space-y-4">
							<Input placeholder="Search" className="w-full" />
							<nav className="flex flex-col space-y-2">
								<a href="#" className="hover:text-blue-700">產品分類</a>
								<a href="#" className="hover:text-blue-700">關於 TTH</a>
								<a href="#" className="hover:text-blue-700">靈感佈置專欄</a>
								<a href="#" className="hover:text-blue-700 flex items-center"><ShoppingCart className="mr-1 h-5 w-5" /></a>
								<a href="#" className="hover:text-blue-700 flex items-center"><User className="mr-1 h-5 w-5" /></a>
							</nav>
						</SheetContent>
					</Sheet>
				</div>




			</nav>



		</>

	)
}