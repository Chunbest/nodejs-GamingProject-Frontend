// 封裝 custom hook，這裡處理 API 請求與行為邏輯（成功跳轉、失敗提示）
import { registerUser } from '@/api/auth';
import type { RegisterSchema } from "@/pages/auth/types/authSchema";

// useAuth 自訂 hook，提供註冊功能
export const useAuth = () => {
	// register 函式：呼叫註冊 API，處理註冊流程
	const register = async (payload: RegisterSchema) => {
		try {
			// 呼叫 registerUser API，傳入註冊資料
			const res = await registerUser(payload);
			console.log('registerUser API 被呼叫', payload);
			// TODO: 處理 res，例如儲存 token、跳轉頁面或顯示提示
			return res;
		} catch (err) {
			// 錯誤處理，如顯示錯誤訊息
			console.error('註冊失敗:', err);
			throw err;
		}
	};

	// 將 register 方法回傳，供元件使用
	return { register };
};