import React, {useEffect, useState} from 'react';
import './Home.css';
import bg from '../../assets/img/Rectangle 1-overlay.png';
import Carousel from '../shared/Carousel/Carousel';
import {Link, useLoaderData} from 'react-router-dom';

const Home = () => {
	const [travelData, setTravelData] = useState([]);
	const [detailsbar, setdetailsbar] = useState('');
	const {name, details} = travelData;

	const allTravelData = useLoaderData();
	useEffect(() => {
		fetch('https://travel-guru-server-puce-tau.vercel.app/travel/1')
			.then((res) => res.json())
			.then((data) => {
				setTravelData(data);
			});
	}, []);
	const bannerStyle = {
		background: ` url('${bg}')`,
		padding: '10px',
		height: '100vh',
		backgroundSize: 'cover',
		backgroundPosition: '4px -156px',
	};
	return (
		<div className="home-container absolute top-0 left-0 " style={bannerStyle}>
			<div className="content-container grid px-9 ">
				<div className="content-text text-white pl-14">
					<h2 className="text-7xl font-bold tracking-widest font-bebas">{name}</h2>
					<p className="text-1xl font-bold tracking-widest">
						{useEffect(() => {
							const timer = setTimeout(() => {
								setdetailsbar(details);
							}, 400);
							return () => clearTimeout(timer);
						}, [travelData])}
						{detailsbar.length > 200 ? `${details.slice(0, 100) + '....'}` : ''}
					</p>
					<Link to="/booking/1" className="">
						<button className="btn  btn-warning mt-5">Booking Now</button>
					</Link>
				</div>
				<div className="content-slider">
					<Carousel allTravelData={allTravelData}></Carousel>
				</div>
			</div>
		</div>
	);
};

export default Home;
