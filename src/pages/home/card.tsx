// PromoMultiColumnCards.tsx
import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";

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
		image: "https://via.placeholder.com/400x300.png?text=HEX+Mk+Pro",
		price: 4990,
	},
	{
		id: "2",
		name: "Elite Controller V2 電競手把",
		image: "https://via.placeholder.com/400x300.png?text=Elite+Controller+V2",
		price: 4990,
	},
	{
		id: "3",
		name: "HEX Mini 超輕量滑鼠",
		image: "https://via.placeholder.com/400x300.png?text=HEX+Mini",
		price: 4990,
	},
	{
		id: "4",
		name: "PX Wireless - 無線光軸鍵盤",
		image: "https://via.placeholder.com/400x300.png?text=PX+Wireless",
		price: 4990,
	},
];

export function ExampleCard({ products }: Props) {
	return (
		<>
			<section className="py-12 bg-gray-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-8">限時熱銷推薦</h2>
					<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{products.map((product) => (
							<Card key={product.id} className="group hover:shadow-lg transition-shadow">
								<div className="relative overflow-hidden">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
									/>
									<button
										className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 hidden group-hover:block"
										aria-label="收藏"
									>
										<HeartIcon className="w-5 h-5" />
									</button>
								</div>
								<div className="p-4">
									<h3 className="text-lg font-medium">{product.name}</h3>
									<p className="mt-2 text-xl font-bold">NTD {product.price}</p>
									<Button className="mt-4 w-full flex items-center justify-center">
										<ShoppingCartIcon className="w-5 h-5 mr-2" />
										加入購物車
									</Button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
