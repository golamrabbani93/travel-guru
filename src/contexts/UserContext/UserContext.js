import React, {createContext, useEffect, useState} from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const UserContext = ({children}) => {
	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(true);
	const auth = getAuth(app);
	//*create user With Email and password
	const createUserEmail = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//*sign user With Email and password
	const signUserEmail = (email, password) => {
		setLoader(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// *user check
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (curentUser) => {
			setUser(curentUser);
			setLoader(false);
		});
		return () => {
			unSubscribed();
		};
	}, [auth]);

	// *user profile Upadate
	const userUpdate = (profile) => {
		setLoader(true);
		return updateProfile(auth.currentUser, profile);
	};
	//*Google signup or sihn in
	const googleProvider = new GoogleAuthProvider();
	const googleSignIn = () => {
		setLoader(true);
		return signInWithPopup(auth, googleProvider);
	};
	// *user signOut
	const userSignOut = () => {
		setLoader(true);
		return signOut(auth);
	};
	const authInfo = {
		user,
		createUserEmail,
		signUserEmail,
		userUpdate,
		userSignOut,
		loader,
		googleSignIn,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
