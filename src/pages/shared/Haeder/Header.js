import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/img/logo.png';
import {AuthContext} from '../../../contexts/UserContext/UserContext';
import {FaUserAlt} from 'react-icons/fa';
const Header = () => {
	const {user, userSignOut} = useContext(AuthContext);

	const handleSignOut = () => {
		userSignOut()
			.then((result) => {})
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<div className="navbar bg-transparent relative z-10 text-white container mx-auto">
			<div className="navbar-start">
				<Link className="btn bg-white hover:bg-white">
					<img src={logo} alt="" className="w-24" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex  ">
				<ul className="menu menu-horizontal p-0 ">
					<li>
						<NavLink className="mr-4 hover:bg-transparent" to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="mr-4 hover:bg-transparent" to="/news">
							News
						</NavLink>
					</li>
					<li>
						<NavLink className="mr-4 hover:bg-transparent" to="/destionation">
							Destionation
						</NavLink>
					</li>
					<li>
						<NavLink className="mr-4 hover:bg-transparent" to="/blog">
							Blog
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{user?.uid ? (
					''
				) : (
					<Link to="/signin" className="btn btn-warning w-32 font-bold">
						Login
					</Link>
				)}

				{user?.uid ? (
					<div className="dropdown dropdown-end ">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className=" rounded-full flex justify-center items-center">
								{user?.photoURL ? <img src={user?.photoURL} alt="" /> : <FaUserAlt></FaUserAlt>}
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 tracking-wider text-warning hover:text-warning font-bold rounded-box w-52"
						>
							<li>
								<span>{user?.displayName}</span>
							</li>
							<li>
								<button onClick={handleSignOut}>Logout</button>
							</li>
						</ul>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Header;
