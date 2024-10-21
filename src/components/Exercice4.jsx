import { useState } from "react";
import Dice from "./container/Dice";
import Exercice from "./container/Exercice";

export default function Exercice4() {
	const [diceValue, setDiceValue] = useState(1);

	const rollThatDice = () => {
		setDiceValue(Math.floor(Math.random() * 6) + 1);
	};

	return (
		<Exercice>
			<h2>Exercice 4 : Jeu de dés</h2>
			<p className="instructions">
				Modifie le composant Exercice4 pour faire fonctionner le lancer de dé
			</p>
			<div className="solution">
				<div>
					<Dice value={diceValue} />
					<button type="button" onClick={rollThatDice}>
						Roll !!!
					</button>
				</div>
			</div>
		</Exercice>
	);
}
