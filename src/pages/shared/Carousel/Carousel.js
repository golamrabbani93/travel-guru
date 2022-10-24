import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Carousel.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {Navigation} from 'swiper';
import {Link} from 'react-router-dom';
const Carousel = ({allTravelData}) => {
	return (
		<div className="font-bebas">
			<Swiper
				centeredSlides={true}
				slidesPerView={3}
				spaceBetween={30}
				navigation={true}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				modules={[Navigation]}
				className="mySwiper"
			>
				{allTravelData.map((td) => (
					<SwiperSlide className="flex-col" key={td.id}>
						<div className="active-slider">
							<Link to={`/booking/${td.id}`}>
								<div className="img relative">
									<img src={td.img} alt="" />
								</div>
								<div className="text absolute bottom-12 pb-2 left-7">
									<h2 className="text-3xl text-white">{td.name}</h2>
								</div>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
