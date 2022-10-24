import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../../contexts/UserContext/UserContext';
import google from '../../../../assets/img/icons/google.png';
import facebook from '../../../../assets/img/icons/fb.png';
const SignIN = () => {
	const {signUserEmail, googleSignIn} = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const signUser = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signUserEmail(email, password)
			.then((result) => {
				// const user = result.user;
				form.reset();
				navigate(from, {replace: true});
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				navigate(from, {replace: true});
			})
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<div className="hero h-full mt-14">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<form
					onSubmit={signUser}
					className="card flex-shrink-0 w-96  max-w-sm shadow-2xl bg-base-300"
				>
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="email"
								name="email"
								className="input input-bordered input-warning"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="text"
								placeholder="password"
								name="password"
								className="input input-bordered input-warning"
							/>
							<label className="label">
								<Link href="#" className="text-warning text-xs link link-hover">
									Forgot password?
								</Link>
								<small className="text-xs">
									Don't have acount
									<Link to="/signup" className="text-warning link link-hover ml-1">
										Create Now
									</Link>
								</small>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-warning">Login</button>
						</div>
						<div className="social border border-warning p-2 rounded-2xl">
							<p className="text-center">Sign Up </p>
							<div className="flex justify-center items-center mt-2 ">
								<Link className="mr-2" onClick={handleGoogleSignIn}>
									<img src={google} alt="" style={{width: '40px'}} />
								</Link>
								<Link>
									<img src={facebook} alt="" style={{width: '40px'}} />
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIN;
