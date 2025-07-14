import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL || "https://gaminggear-hub.onrender.com";
const headers = {
	"Content-Type": "application/json",
};
//  建立公開請求（不需要 token）
const publicAxios = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers,
});

//  建立私密請求（需要 token）
const privateAxios = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers,
});

// 攔截器請求：自動加 token，（公開）ex商品列表
privateAxios.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (!token) {
		// 直接丟出自訂錯誤訊息
		return Promise.reject(new Error("請先登入會員！"));
	}

	config.headers.Authorization = `Bearer ${token}`;
	return config;
},
	(error) => {
		return Promise.reject(error);
	});
export { privateAxios, publicAxios };