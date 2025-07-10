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
import '../../../index.css'; // 匯入主要全域的CSS

export default function RegisterFrom() {
	return (
		<>

			<Card className="max-w-sm">
				<CardHeader>
					<CardTitle>註冊會員</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email" className="flex item-left">電子信箱 | Email Address</Label>
								<Input
									id="email"
									type="email"
									placeholder="請輸入您的電子信箱, ex:m11@example.com"
									required
								/>
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
									required />
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="checkpassword">再次輸入密碼</Label>
								</div>
								{/* 後續加入密碼遮眼效果 */}
								<Input id="checkpassword"
									type="password"
									placeholder="請輸入需要包含英文數字大小寫，最短8個字，最長16個字"
									required />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<div className="flex">

						<Button type="submit" className="w-full">
							登入會員
						</Button>
						<CardAction>
							<Button variant="link">註冊會員</Button>
						</CardAction>
					</div>
					<Button variant="outline" className="w-full">
						Login with Google
					</Button>
				</CardFooter>
			</Card>

		</>
	)
}
