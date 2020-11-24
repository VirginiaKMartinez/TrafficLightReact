import React from "react";
import { useState, useEffect } from "react";
import "../../styles/traffic.css";

function Traffic() {
	const [color, setColor] = useState({
		red: "off",
		yellow: "off",
		green: "off"
	});

	const handelRed = () => {
		setColor({
			red: "red_on",
			yellow: "off",
			green: "off"
		});
	};

	const handelYellow = () => {
		setColor({
			red: "off",
			yellow: "yellow_on",
			green: "off"
		});
	};

	const handelGreen = () => {
		setColor({
			red: "off",
			yellow: "off",
			green: "green_on"
		});
	};

	return (
		<div className="First-container traffic">
			<div className="redSquare">
				<div className="red_off" id={color.red} onClick={handelRed} />
			</div>
			<div className="yellowSquare">
				<div
					className="yellow_off"
					id={color.yellow}
					onClick={handelYellow}
				/>
			</div>
			<div className="greenSquare">
				<div
					className="green_off"
					id={color.green}
					onClick={handelGreen}
				/>
			</div>
		</div>
	);
}

export default Traffic;
