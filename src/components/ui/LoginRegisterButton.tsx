import React from "react";
import { cn } from "@/lib/utils"; // shadcn 提供的 class merge 工具

import '../../index.css'; // 匯入主要全域的CSS
import { Button } from "@/components/ui/button" // 匯入自定義的 Button 元件

// 定義元件的 props，繼承自 a 標籤的所有屬性
interface LoginRegisterButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

// 登入／註冊按鈕元件
export const LoginRegisterButton = ({ className, ...props }: LoginRegisterButtonProps) => {
	return (
		<Button
			asChild // 讓 Button 元件包裹 a 標籤，保留 a 的語意
			variant="ghost" // 使用 ghost 樣式
			className={cn(
				// clip-custom-shape 為自定義的多邊形裁切樣式
				// bg-red-600 為紅色背景，hover:bg-red-700 為滑鼠懸停時的深紅色
				// text-white 文字白色，px-5 py-2 為內距
				"clip-custom-shape text-white px-[20px] py-2",
				// 合併外部傳入的 className
			)}
			
		>
			{/* a 標籤作為按鈕的實際點擊區域，預設導向 /login，props 可覆蓋 href 或其他屬性 */}
			<a href="/login" {...props}>登入／註冊</a>
		</Button>
	);
};
