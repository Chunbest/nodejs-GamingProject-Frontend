// 匯入 react-hook-form 用於表單管理
import { useForm } from 'react-hook-form';
// 匯入 zodResolver 用於 zod 驗證
import { zodResolver } from '@hookform/resolvers/zod';
// 匯入註冊表單的 zod schema 及型別
import { RegisterSchemaType } from '../types/authSchema';
import type { RegisterSchema } from '../types/authSchema';
// 匯入自定義的 useAuth hook
import { useAuth } from '../hooks/useAush';
// 匯入 UI 按鈕元件
import { Button } from "@/components/ui/button"
// 匯入 UI 卡片元件
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
// 匯入 UI 輸入框元件
import { Input } from "@/components/ui/input"
// 匯入 UI 標籤元件
import { Label } from "@/components/ui/label"
// 匯入自定義 toast hook
import { useToast } from "@/hooks/use-toast"
// 匯入全域 CSS


// 註冊表單元件
const RegisterForm = () => {
	// 取得註冊方法
	const { register: registerUser } = useAuth();
	// 取得 toast 方法
	const { toast } = useToast();
	// 初始化表單，設定 zod 驗證
	const { handleSubmit, register, formState: { errors } } = useForm<RegisterSchema>({
		resolver: zodResolver(RegisterSchemaType),
	});

	// 表單送出處理函式
	const onSubmit = async (data: RegisterSchema) => {
		console.log('送出資料:', data);
		try {
			// 呼叫註冊 API
			const response = await registerUser(data);
			console.log('註冊成功:', response);

			// 成功提示
			toast({
				title: "註冊成功！",
				description: "恭喜您成功註冊會員。",
				variant: "default",
			});

			// 可以選擇重設表單或導向登入頁面
			// reset(); // 如果需要重設表單

		} catch (error: any) {
			console.error('註冊失敗:', error);

			// 錯誤提示
			toast({
				title: "註冊失敗",
				description: error.response?.data?.message || error.message || "註冊過程中發生錯誤，請稍後再試。",
				variant: "destructive",
			});
		}
	};

	return (
		<>
			{/* 註冊卡片容器 */}
			<Card className="max-w-sm">
				<CardHeader>
					<CardTitle>註冊會員 / 登入</CardTitle>
				</CardHeader>
				<CardContent>
					{/* 註冊表單 */}
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-6">
							{/* 電子信箱欄位 */}
							<div className="grid gap-2">
								<Label htmlFor="email" className="flex item-left">電子信箱 | Email Address</Label>
								<Input
									id="email"
									type="email"
									placeholder="請輸入您的電子信箱, ex:m11@example.com"
									required
									{...register('email')}
								/>
								{/* 顯示 email 驗證錯誤訊息 */}
								{errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
							</div>
							{/* 密碼欄位 */}
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">密碼 | Password</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										忘記密碼?
									</a>
								</div>
								<Input id="password"
									type="password"
									placeholder="請輸入需要包含英文數字大小寫，最短8個字，最長16個字"
									required
									{...register('password')}
								/>
								{/* 顯示 password 驗證錯誤訊息 */}
								{errors.password && <span className="text-red-500 text-xs">{errors.password.message as string}</span>}
							</div>
							{/* 姓名欄位 */}
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="name">姓名 | Name</Label>
								</div>
								<Input id="name"
									type="text"
									placeholder="請輸入姓名"
									required
									{...register('name')}
								/>
								{/* 顯示 name 驗證錯誤訊息 */}
								{errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
							</div>
							{/* 角色欄位 */}
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="role">角色 | Role</Label>
								</div>
								<Input id="role"
									type="text"
									placeholder="user 或 admin"
									required
									{...register('role')}
								/>
								{/* 顯示 role 驗證錯誤訊息 */}
								{errors.role && <span className="text-red-500 text-xs">{errors.role.message as string}</span>}
							</div>
						</div>
						{/* 註冊按鈕 */}
						<Button type="submit" className="w-full mt-6">
							註冊會員
						</Button>
						{/* 直接登入按鈕（尚未實作跳轉） */}
						<Button type="submit" className="w-full mt-6">
							已經是會員了嗎? 直接登入
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					{/* Google 登入按鈕（尚未實作） */}
					<Button variant="outline" className="w-full">
						Login with Google
					</Button>
				</CardFooter>
			</Card>
		</>
	)
}

export default RegisterForm;
