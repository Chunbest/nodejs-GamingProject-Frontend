//從專案根目錄引入
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { IoCartOutline } from "react-icons/io5";
import { Menu, ShoppingCart, User } from "lucide-react"
import { LoginRegisterButton } from "@/components/ui/LoginRegisterButton"

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<>
			<div className="border border-red-500">
				{/* 導覽連結 - 大螢幕顯示 */}
				<div className=" items-center justify-between flex flex-row gap-4 p-4">
					<a href="#" className="text-white hover:text-blue-700">產品分類</a>
					<a href="#" className="text-white hover:text-blue-700">電競專欄</a>
					<a href="#" className="text-white hover:text-blue-700">關於我們</a>
					<a> <IoCartOutline href="#" className="w-full h-full text-white hover:text-blue-700" /></a>		
					<a><ShoppingCart className="w-auto text-white hover:text-blue-700" /></a>
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
			</div>
		</>

	)
}