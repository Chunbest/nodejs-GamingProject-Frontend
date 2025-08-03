// 註冊、登入 API
import type { RegisterSchema } from "@/pages/auth/types/authSchema";
import { privateAxios, publicAxios } from "./axiosInstance";

// 具名函式匯出 named export
// 串接後端的註冊會員API
export function registerUser(payload: RegisterSchema) {
	return publicAxios.post('/api/v1/users/sign-up', payload); // （payload是註冊資料）。
}

export function signInUser(payload: RegisterSchema) {
	return privateAxios.post('/api/v1/users/sign-in', payload); // （payload是登入會員資料）。
}