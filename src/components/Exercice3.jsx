import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice3() {
	const [isTextShowed, setIsTextShowed] = useState(true);
	return (
		<Exercice>
			<h2>Exercice 3 : Toggle</h2>
			<p className="instructions">
				Modifie le composant Exercice3 pour basculer entre "Afficher" et
				"Masquer" un texte.
			</p>
			<div className="solution">
				<div>
					<button type="button" onClick={() => setIsTextShowed(!isTextShowed)}>
						Afficher/Masquer
					</button>
					{isTextShowed && <p>Texte à afficher/masquer</p>}
				</div>
			</div>
		</Exercice>
	);
}
