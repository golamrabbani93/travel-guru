import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleDetail from './SingleDetail/SingleDetail';

const TravelDetail = () => {
	const travelDetails = useLoaderData();
	const [title, setTitle] = useState('');
	const mapstyle = {
		width: '600px',
		height: '450px',
	};
	return (
		<div className="travel-details">
			<h2 className="text-white text-5xl text-center mb-3">{title}</h2>
			<div className="travel-container grid grid-cols-2 justify-center items-center container mx-auto">
				<div className="">
					{travelDetails.map((travel) => (
						<SingleDetail key={travel.id} traveldata={travel} setTitle={setTitle}></SingleDetail>
					))}
				</div>
				<div className="text-center ml-7">
					<iframe
						style={mapstyle}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.49451616143!2d88.5709962733903!3d24.380228204729793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sRajshahi!5e0!3m2!1sen!2sbd!4v1666584919584!5m2!1sen!2sbd"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default TravelDetail;
