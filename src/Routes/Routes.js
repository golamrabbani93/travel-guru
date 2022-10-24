import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../pages/Blog/Blog';
import Booking from '../pages/Booking/Booking';
import BookingSuccess from '../pages/Booking/BookingSuccess/BookingSuccess';
import Destination from '../pages/Destination/Destination';
import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import SignIN from '../pages/shared/Login/SignIn/SignIN';
import SignUP from '../pages/shared/Login/SignUP/SignUP';
import TravelDetail from '../pages/TravelDetail/TravelDetail';
import PrivateRoutes from './PrivateRoute/PrivateRoutes';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				loader: () => {
					return fetch('https://travel-guru-server-puce-tau.vercel.app/travel');
				},
				element: <Home></Home>,
			},
			{
				path: '/booking/:id',
				loader: ({params}) => {
					return fetch(`https://travel-guru-server-puce-tau.vercel.app/travel/${params.id}`);
				},
				element: <Booking></Booking>,
			},
			{
				path: '/destionation',
				element: (
					<PrivateRoutes>
						<Destination></Destination>
					</PrivateRoutes>
				),
			},
			{
				path: '/news',
				element: <News></News>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/bookingsuccess',
				element: (
					<PrivateRoutes>
						<BookingSuccess></BookingSuccess>
					</PrivateRoutes>
				),
			},
			{
				path: '/signin',
				element: <SignIN></SignIN>,
			},
			{
				path: '/signup',
				element: <SignUP></SignUP>,
			},

			{
				path: '/travel-details/:id',
				loader: ({params}) => {
					return fetch(
						`https://travel-guru-server-puce-tau.vercel.app/travel-details/${params.id}`,
					);
				},
				element: <TravelDetail></TravelDetail>,
			},
		],
	},
]);
