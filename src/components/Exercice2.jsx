import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice2() {
	const [inputText, setInputText] = useState(" ");
	return (
		<Exercice>
			<h2>Exercice 2 : Input contrôlé</h2>
			<p className="instructions">
				Modifie le composant Exercice2 pour affichez la valeur du champ de texte
				sous celui-ci.
			</p>
			<div className="solution">
				<div>
					<input
						type="text"
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
					<p>Valeur de l'input :</p>
					<p>{inputText}</p>
				</div>
			</div>
		</Exercice>
	);
}
