import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchemaType } from '../types/authSchema';
import type { RegisterSchema } from '../types/authSchema';
import { useAuth } from '../hooks/useAush';
import { Button } from "@/components/ui/button"
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import '../../../index.css'; // 匯入主要全域的CSS


const RegisterForm = () => {
	const { register: registerUser } = useAuth();
	const { toast } = useToast();
	const { handleSubmit, register, formState: { errors } } = useForm<RegisterSchema>({
		resolver: zodResolver(RegisterSchemaType),
	});

	const onSubmit = async (data: RegisterSchema) => {
		console.log('送出資料:', data);
		try {
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
			<Card className="max-w-sm">
				<CardHeader>
					<CardTitle>註冊會員 / 登入</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email" className="flex item-left">電子信箱 | Email Address</Label>
								<Input
									id="email"
									type="email"
									placeholder="請輸入您的電子信箱, ex:m11@example.com"
									required
									{...register('email')}
								/>
								{errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
							</div>
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
								{errors.password && <span className="text-red-500 text-xs">{errors.password.message as string}</span>}
							</div>
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
								{errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
							</div>
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
								{errors.role && <span className="text-red-500 text-xs">{errors.role.message as string}</span>}
							</div>
						</div>
						<Button type="submit" className="w-full mt-6">
							註冊會員
						</Button>
						<Button type="submit" className="w-full mt-6">
							已經是會員了嗎? 直接登入
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button variant="outline" className="w-full">
						Login with Google
					</Button>
				</CardFooter>
			</Card>
		</>
	)
}

export default RegisterForm;
