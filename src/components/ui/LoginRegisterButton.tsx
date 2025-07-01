import React from "react";
import { cn } from "@/lib/utils"; // shadcn 提供的 class merge 工具

import '../../index.css'; // 匯入主要全域的CSS
import { Button } from "@/components/ui/button" // 匯入自定義的 Button 元件
import { Link } from "lucide-react";

// 定義元件的 props，繼承自 a 標籤的所有屬性
interface LoginRegisterButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

// 登入／註冊按鈕元件
export const LoginRegisterButton = ({ className, ...props }: LoginRegisterButtonProps) => {
	return (
		<Button
			asChild
			variant="ghost"
			className="p-0 bg-transparent shadow-none" // Button 外層不要有背景
		>
			<a
				href="/login"
				className={cn(
					"clip-custom-shape text-white px-[1.6em] py-[5px] text-2xl font-bold tracking-wide bg-red-gradient-hover bg-red-gradient ",
					className
				)}
				{...props}
			>
				登入／註冊
			</a>
		</Button>
	);
};
