import React, {useReducer} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import {DateRangeInput} from '@datepicker-react/styled';
import bg from '../../assets/img/Rectangle 1-overlay.png';
import './Booking.css';

const initialState = {
	startDate: null,
	endDate: null,
	focusedInput: null,
};
function reducer(state, action) {
	switch (action.type) {
		case 'focusChange':
			return {...state, focusedInput: action.payload};
		case 'dateChange':
			return action.payload;
		default:
			throw new Error();
	}
}
const Booking = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const bannerStyle = {
		background: ` url('${bg}')`,
		padding: '10px',
		height: '100vh',
		width: '100%',
		backgroundSize: 'cover',
		backgroundPosition: '4px -156px',
	};
	const singleTravel = useLoaderData();
	const {details, name, id} = singleTravel;
	return (
		<div className="home-container absolute top-0 left-0 " style={bannerStyle}>
			<div className="booking-container grid grid-cols-2 h-full justify-center items-center container mx-auto">
				<div className="booking-text px-8">
					<h2 className="text-8xl text-white font-bebas tracking-wide">{name}</h2>
					<p className=" text-white text-justify ">{details}</p>
					<Link to={`/travel-details/${id}`}>
						<button type="submit" value="Submit" className="mt-6 btn btn-warning font-bold">
							Details {name}
						</button>
					</Link>
				</div>
				<div className="booking-form">
					<div className="hero min-h-screen">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<div className="card flex-shrink-0 text-white text-center pt-4 max-w-sm shadow-2xl bg-base-100 w-96">
								<h1 className="text-5xl font-bold ">Go now!</h1>
								<div className="card-body">
									<div className="form-control required">
										<label htmlFor="origin" className="label">
											<span className="label-text">Origin</span>
										</label>
										<select
											name="to"
											id="origin"
											className="select select-warning w-full max-w-xs"
											required
										>
											<option disabled selected>
												Select your Loaction
											</option>
											<option>Dhaka</option>
											<option>Rajshahi</option>
											<option>Sylet</option>
											<option>Kustia</option>
											<option>Rangpur</option>
										</select>
									</div>
									<div className="form-control">
										<label className="label">
											<span className="label-text">Destination</span>
										</label>
										<select className="select select-warning w-full max-w-xs">
											<option disabled selected>
												Select your Destination
											</option>
											<option>Cox's Bazar</option>
											<option>Sundarban</option>
											<option>Sreemangal</option>
											<option>Sajek</option>
										</select>
									</div>
									<div className="">
										{' '}
										<DateRangeInput
											onDatesChange={(data) => dispatch({type: 'dateChange', payload: data})}
											onFocusChange={(focusedInput) =>
												dispatch({type: 'focusChange', payload: focusedInput})
											}
											startDate={state.startDate} // Date or null
											endDate={state.endDate} // Date or null
											focusedInput={state.focusedInput} // START_DATE, END_DATE or null
										/>
									</div>
									<div className="form-control mt-6">
										<Link to="/bookingsuccess">
											<button
												type="submit"
												value="Submit"
												className="w-full btn btn-warning font-bold"
											>
												Start Booking
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
