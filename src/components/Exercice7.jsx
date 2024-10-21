import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice7() {
	// 1. Crée un state pour gérer les valeurs des champs du formulaire (nom, prénom, email)
	// 2. Crée un state pour gérer les valeurs soumises
	// 3. Crée une fonction pour mettre à jour les valeurs du formulaire à chaque changement dans les champs
	// 4. Crée une fonction pour gérer la soumission du formulaire
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});
	return (
		<Exercice>
			<h2>Exercice 7 : Formulaire multi-champs</h2>
			<p className="instructions">
				Modifie le composant Exercice7 pour faire un formulaire avec plusieurs
				champs de texte contrôlés (nom, prénom, email) et affichez les valeurs
				soumises en dessous du formulaire.
			</p>
			<div className="solution">
				<div>
					<input
						type="text"
						name="nom"
						placeholder="Nom"
						onChange={(e) =>
							setFormData({ ...formData, lastName: e.target.value })
						}
					/>

					<input
						type="text"
						name="prenom"
						placeholder="Prénom"
						onChange={(e) =>
							setFormData({ ...formData, firstName: e.target.value })
						}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
					<button type="button" onClick={() => alert(`Merci ${formData.firstName}, maintenant nous pouvons revendre vos données mouahaha !`)}>Save</button>
				</div>
				<p>Nom : {formData.lastName} </p>
				<p>Prénom : {formData.firstName}</p>
				<p>Email : {formData.email}</p>
			</div>
		</Exercice>
	);
}
