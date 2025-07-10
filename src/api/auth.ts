// 註冊、登入 API
import { RegisterSchema } from "@/features/auth/types/authSchema";
import axiosInstance from "./axiosInstance";

//具名函式匯出 named export
export const registerUser = (payload: RegisterSchema) => {
	return axiosInstance.post('/auth/register', payload);
}