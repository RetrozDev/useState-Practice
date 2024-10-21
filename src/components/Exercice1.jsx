import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice1() {
	const [count, setCount] = useState(10);
	return (
		<Exercice>
			<h2>Exercice 1 : Compteur simple</h2>
			<p className="instructions">
				Modifie le composant Exercice1 pour faire fonctionner le compteur et ses
				deux boutons.
			</p>
			<div className="solution">
				<div>
					<button type="button" onClick={() => setCount(count - 1)}>
						-
					</button>
					<button type="button" onClick={() => setCount(count + 1)}>
						+
					</button>
					<p>Compteur : {count}</p>
				</div>
			</div>
		</Exercice>
	);
}
