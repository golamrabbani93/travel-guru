import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../pages/shared/Haeder/Header';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<span style={{paddinTop: '100px'}}></span>
			<Outlet></Outlet>
		</div>
	);
};

export default Main;
