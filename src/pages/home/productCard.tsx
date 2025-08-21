// PromoMultiColumnCards.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RiHeartFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { ButtonNew } from "@/components/layout/buttonNew"; // 匯入自定義的 Button 元件

interface Product {
	id: string;
	name: string;
	image: string;
	price: number;
}

interface Props {
	products: Product[];
}

export const products = [
	{
		id: "1",
		name: "HEX Mk Pro - 機械式電競鍵盤",
		image: "./headphone.jpg",
		price: 4990,
	},
	{
		id: "2",
		name: "Elite Controller V2 電競手把",
		image: "./headphone.jpg",
		price: 4990,
	},
	{
		id: "3",
		name: "HEX Mini 超輕量滑鼠",
		image: "./headphone.jpg",
		price: 4990,
	},
	{
		id: "4",
		name: "PX Wireless - 無線光軸鍵盤",
		image: "./headphone.jpg",
		price: 4990,
	},
];

export default function ProductCard({ products }: Props) {
	return (
		<>
			<section className="py-12 ">
				
				
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl text-red-500 font-bold text-center mb-8">熱銷<span className="text-white">推薦</span></h2>
				
					<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{products.map((product) => (
							<Card key={product.id} className="group transition-shadow  bg-gray-500 border-gray-100 hover:border-3 hover:border-red-500 hover:bg-white hover:text-black ">
								<div className="relative overflow-hidden">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform "
									/>
									<button
										className="absolute top-2 right-2 p-2 bg-gray-600 rounded-full text-red-500 hover:bg-red-500"
										aria-label="收藏"
									>
										<RiHeartFill className="group-hover:block fill-white  w-5 h-5" />

									</button>

								</div>
								<div className="p-4">
									<h5 className="text-lg font-medium mb-6">{product.name}</h5>
									<div className="flex justify-between group   ">
										<p className="mt-2  text-lg font-bold">NTD {product.price}</p>
										<Button className="group-hover:bg-red-500 rounded-none">
											<FaShoppingCart className="size-5 text-red-500 group-hover:text-white" />

										</Button>
									</div>
								</div>
							</Card>
						))}
					</div>
					<div className="mt-3 flex ">
						<ButtonNew asChild className="flex items-end">
							<a href="#hot-products">立即選購</a>
						</ButtonNew>
					</div>
				</div>
			</section>
		</>
	);
}
