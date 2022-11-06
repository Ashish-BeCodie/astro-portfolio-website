import { Moon, Sun } from "react-feather";
import { useState, useEffect } from 'react';



const DarkModeButton = () => {

	const [theme, setTheme] = useState('dark');

	const changeTheme = () => {
		var htmlTag = document.getElementsByTagName("html")[0];
		htmlTag.classList.toggle("dark");

		var logo = document.getElementById("logo");
		logo.classList.toggle("dark");

		updateIcon();
	};

	function updateIcon() {
		var className = document.getElementsByTagName("html")[0].className;
		setTheme(className);
		localStorage.theme = className;
		console.log(localStorage);
	}

	return (
		<button onClick={changeTheme} className="flex justify-center py-6 px-6 text-black dark:text-white w-full">
			{theme != 'dark' ? <Moon /> : <Sun />}
		</button>
	)
}

export default DarkModeButton
