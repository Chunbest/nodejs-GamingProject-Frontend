import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
const images = [
	"/keyboard.png", // 第一張圖片的相對路徑
	"/keyboard.jpg",   // 第二張圖片的相對路徑
	"/image3.jpg",   // 第三張圖片的相對路徑
	"/image4.jpg",   // 第四張圖片的相對路徑
	"/image5.jpg"    // 第五張圖片的相對路徑
];
export default function CarouselWithPagination() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="mx-auto max-w-xs">
			<Carousel setApi={setApi} className=" max-w-xs">
				<CarouselContent>
					{images.map((src, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className="flex aspect-video items-center justify-center ">
									<img src={src} alt={`Image ${index + 1}`} className="max-h-xs max-w-xs object-cover " />
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="mt-4 flex items-center justify-center gap-2">
				{Array.from({ length: count }).map((_, index) => (
					<button
						key={index}
						onClick={() => api?.scrollTo(index)}
						className={cn("h-3.5 w-3.5 rounded-full border-2 border-grey", {
							" bg-orange-500": current === index + 1,
						})}
					/>
				))}
			</div>
		</div>
	);
}
	
