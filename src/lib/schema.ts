import { z } from "zod";

export const registerSchema = z.object({
	name: z.string().min(1, "姓名為必填"),
	email: z.string().email("Email 格式不正確"),
	password: z.string().min(6, "密碼至少 6 碼"),
});
