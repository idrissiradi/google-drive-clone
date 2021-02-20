import "./App.css";
import { useState } from "react";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
	const [user, setUser] = useState({
		displayName: "Ahmed Radi",
		email: "ahmed@radi.com",
		emailVerified: true,
		phoneNumber: null,
		photoURL:
			"https://images.unsplash.com/photo-1613447326896-c7b8a0ab9b43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
	});

	// authentication

	return (
		<div className='App'>
			<Header userPhoto={user.photoURL} />
			<Sidebar />
			{/* 
			auth = true
			sidebar
			filesView
			sideIcons 
			*/}

			{/* no auth: log in */}
		</div>
	);
}

export default App;
