import React from 'react';
import {RotateLoader} from 'react-spinners';

const Loader = () => {
	return (
		<div className=" absolute top-2/4 left-2/4" style={{marginLeft: '-50px'}}>
			<RotateLoader color="#FBBD23" />
		</div>
	);
};

export default Loader;
