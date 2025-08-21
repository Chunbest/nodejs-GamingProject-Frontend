// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/styles/swiper.css';
import { ButtonNew } from "../../components/layout/buttonNew" // 匯入自定義的 Button 元件

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
	return (
		<>


			<div className="relative">
				{/* 輪播圖 */}
				<Swiper spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper">
					<SwiperSlide className=" ">
						<img
							src="./Gamingkeyboard.png"
							alt="電競操控"

						/>
					</SwiperSlide>
					<SwiperSlide className="bg-[#444444]">
						<img
							src="./keyboard.png"
							alt="電競操控"

						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="./headphone.jpg"
							alt="最新裝備"
						/>
					</SwiperSlide>
				</Swiper>

				{/* 文字 + 按鈕區塊 */}
				<div className="absolute inset-0 z-50 flex flex-col justify-start items-center text-top gap-6  pt-15">
					<h1 className="text-white font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide leading-snug drop-shadow-lg  py-5 ">
						電競操控，<span className="text-red-500">極速致勝</span>
					</h1>
					<ButtonNew asChild>
						<a
							href="#hot-products"
							className=" hover:bg-red-700 text-white  lg:text-sm sm:text-xm md:text-xs  transition-all duration-300 shadow-lg"
						>
							立即選購
						</a>
					</ButtonNew>
				</div>
			</div>
		</>
	);
}