import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice6() {
	const [number, setNumber] = useState(0);
	const [maxNumber, setMaxNumber] = useState(10);

	return (
		<Exercice>
			<h2>Exercice 6 : Compteur avec limite</h2>
			<p className="instructions">
				Modifie le composant Exercice6 pour faire un compteur qui peut augmenter
				jusqu'à une valeur maximale définie par l'utilisateur.
			</p>
			<div className="solution">
				<div>
					<input
						type="number"
						placeholder="Limite max :"
						onChange={(e) => {
							const value = Number(e.target.value);
							if (!Number.isNaN(value) && value >= 0) {
								setMaxNumber(value);
							}
						}}
					/>
					<p>Compteur : {number} </p>
					<button
						type="button"
						onClick={() => {
							if (number < maxNumber) {
								setNumber(number + 1); 
							}
						}}
					>
						Augmenter
					</button>
				</div>
			</div>
		</Exercice>
	);
}
