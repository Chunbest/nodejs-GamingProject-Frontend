import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { registerSchema } from "@/lib/schema"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

type RegisterInput = z.infer<typeof registerSchema>

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
	})

	const navigate = useNavigate()

	const onSubmit = async (data: RegisterInput) => {
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})

			const result = await res.json()

			if (!res.ok) {
				toast.error(result.message || "註冊失敗")
				return
			}

			toast.success("註冊成功，請登入！")
			navigate("/register")
		} catch (err) {
			toast.error("系統錯誤，請稍後再試")
		}
	}

	return (
		<div className="min-h-screen flex justify-center items-center p-4">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>註冊新帳號</CardTitle>
					<CardDescription>請輸入以下資料進行註冊</CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent className="flex flex-col gap-4">
						<div>
							<Label htmlFor="name">姓名</Label>
							<Input id="name" placeholder="輸入您的姓名" {...register("name")} />
							{errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="m@example.com" {...register("email")} />
							{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
						</div>
						<div>
							<Label htmlFor="password">密碼</Label>
							<Input id="password" type="password" placeholder="至少 6 字" {...register("password")} />
							{errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						<Button type="submit" disabled={isSubmitting} className="w-full">
							{isSubmitting ? "註冊中..." : "註冊"}
						</Button>
						<Button variant="link" className="w-full" onClick={() => navigate("/login")}>
							已有帳號？前往登入
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	)
}
