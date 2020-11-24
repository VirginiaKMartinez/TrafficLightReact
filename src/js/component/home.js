import React from "react";
import Traffic from "./Traffic.jsx";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<h1 className="title">
				<i className="fab fa-react" /> Traffic Light{" "}
				<i className="fab fa-react" />
			</h1>

			<div className="row justify-content-center">
				<div className=" trafficLight">
					<Traffic />
				</div>
			</div>

			<p>
				The light glows when clicked.The whole purpose of the component
				is displaying a traffic light with red, yellow and green lights.
				When any light is clicked (selected) it has to glow, but the
				other lights have to stop glowing. The component has a hooked
				state variable that tracks the color.
			</p>
		</div>
	);
}
