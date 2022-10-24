import React, {useEffect} from 'react';
import {FaDollarSign, FaStar} from 'react-icons/fa';
import './SingleDetail.css';

const SingleDetail = ({traveldata, setTitle, setIframe}) => {
	// console.log('🚀🚀: SingleDetail -> traveldata', traveldata);
	const {title, place, price, rating, room_details, img, iframe} = traveldata;

	useEffect(() => {
		const timer = setTimeout(() => {
			setTitle(place);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="single-travel mb-5  justify-center items-center border border-warning  rounded-2xl p-4">
			<div className="room-img ">
				<img src={img} alt="" />
			</div>
			<div className="travel-text text-white ml-5 ">
				<h5 className="text-xs pt-2">Place: {place}</h5>
				<h2 className="text-lg pt-2">{title}</h2>
				<div className="room-details text-gray-500 flex justify-between mr-7 pt-2">
					<p>{room_details.guests} Guests</p>
					<p>{room_details.bedrooms} Bedrooms</p>
					<p>{room_details.bed} Beds</p>
					<p>{room_details.bath} Bathroom</p>
				</div>
				<div className="rating-price pt-2 flex justify-around">
					<div className="rating ">
						<p className="flex justify-center items-center">
							<FaStar className="text-warning mr-1"></FaStar> {rating.rate_number}
							<span className="text-xs">{`(${rating.out_of})`}</span>
						</p>
					</div>
					<div className="price">
						<p className="flex justify-center items-center">
							<FaDollarSign className="text-warning " />
							<span>{price}/Night</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleDetail;
