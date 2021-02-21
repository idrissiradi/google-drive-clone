import "./App.css";
import { useState } from "react";

import logo from "./media/google-drive-logo.png";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons";

import { auth, provider } from "./firebase";

function App() {
	const [user, setUser] = useState();

	const handleLogin = () => {
		if (!user) {
			auth.signInWithPopup(provider).then((result) => {
				setUser(result.user);
			});
		}
	};

	return (
		<div className='app'>
			{user ? (
				<>
					<Header userPhoto={user.photoURL} />
					<div className='app__main'>
						<Sidebar />
						<FilesView />
						<SideIcons />
					</div>
				</>
			) : (
				<div className='app__login'>
					<img src={logo} alt='Google Drive' />
					<button onClick={handleLogin}>Log in to Google Drive</button>
				</div>
			)}
		</div>
	);
}

export default App;
