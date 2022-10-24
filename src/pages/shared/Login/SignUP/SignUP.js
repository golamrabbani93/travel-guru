import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../../contexts/UserContext/UserContext';
import google from '../../../../assets/img/icons/google.png';
import facebook from '../../../../assets/img/icons/fb.png';

const SignUP = () => {
	const {createUserEmail, userUpdate, googleSignIn} = useContext(AuthContext);
	const createUser = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		createUserEmail(email, password)
			.then((result) => {
				const user = result.user;
				handleUpdateUserProfile(name, photo);
				form.reset();
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const handleUpdateUserProfile = (name, photo) => {
		const profile = {
			displayName: name,
			photoURL: photo,
		};
		userUpdate(profile)
			.then((result) => {
				console.log('name changed');
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
			})
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<div className="hero mt-8">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<form
					className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-300"
					onSubmit={createUser}
				>
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input input-bordered input-warning"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo Url</span>
							</label>
							<input
								type="text"
								name="photo"
								placeholder="photo URL"
								className="input input-bordered input-warning"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered input-warning"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered input-warning"
								required
							/>
							<label className="mt-3 text-xs flex ">
								<span>Already have an account?</span>
								<Link to="/signin" className="ml-2 text-warning link link-hover">
									Login
								</Link>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-warning">Register</button>
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

export default SignUP;
