//定義資料格式 + 驗證規則
//Zod 驗證 schema

import { z } from "zod";

// 正規表達式設定
const nameRegex = /^[A-Za-z0-9]{2,10}$/; // 不含特殊符號與空白
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

export const RegisterSchema = z.object({
	name: z
		.string()
		.min(2, '名稱不能為空')
		.max(10, '名稱不得超過10個字元')
		.regex(nameRegex, '姓名不得包含特殊字元與空白'),
	password: z
		.string()
		.min(8, '密碼至少 8 個字元')
		.max(16, '密碼不得超過16個字元')
		.regex(passwordRegex, '密碼需包含英文大小寫與數字'),
	email: z
		.string()
		.email('請輸入有效的 Email 格式'),
	role: z.enum(['user', 'admin']), // 這兩種角色	
})

export type RegisterSchema = z.infer<typeof RegisterSchema>