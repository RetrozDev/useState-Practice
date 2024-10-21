import { useState, useEffect } from "react";
import Exercice from "./container/Exercice";
import StopWatch from "./container/StopWatch";

export default function Exercice8() {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	let intervalRef = null;

	useEffect(() => {
		if (isRunning) {
			intervalRef = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}, 1000);
		}

		return () => clearInterval(intervalRef);
	}, [isRunning]);

	const startChronometer = () => {
		setIsRunning(true);
	};

	const stopChronometer = () => {
		setIsRunning(false);
	};

	const resetChronometer = () => {
		setIsRunning(false);
		setSeconds(0);
	};

	return (
		<Exercice>
			<h2>Exercice 8 : Chronomètre</h2>
			<p className="instructions">
				Modifie le composant Exercice8 pour créer un chronomètre avec les
				boutons "Start", "Stop" et "Reset"
			</p>
			<div className="solution">
				<div>
					<StopWatch value={seconds} />
					<button type="button" onClick={startChronometer}>
						Start
					</button>
					<button type="button" onClick={stopChronometer}>
						Stop
					</button>
					<button type="button" onClick={resetChronometer}>
						Reset
					</button>
				</div>
			</div>
		</Exercice>
	);
}
