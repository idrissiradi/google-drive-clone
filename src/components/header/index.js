import React from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";

import logo from "../../media/google-drive-logo.png";

const index = () => {
	return (
		<div className='header'>
			<div className='header__logo'>
				<img src={logo} alt='' />
				<span>Drive</span>
			</div>
			<div className='header__searchContainer'>
				<div className='header__searchBar'>
					<SearchIcon />
					<input type='text' placeholder='Search in drive' />
					<ExpandMoreIcon />
				</div>
			</div>
			<div className='header__icons'>
				<span>
					<HelpOutlineIcon />
					<SettingsIcon />
				</span>
				<AppsIcon />
				<img src='' alt='User Photo' />
			</div>
		</div>
	);
};

export default index;
