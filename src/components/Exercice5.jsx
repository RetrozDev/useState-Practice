import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice5() {
	const [list, setList] = useState([]);

	const [taskToDo, setTaskToDo] = useState("");

	return (
		<Exercice>
			<h2>Exercice 5 : Liste dynamique</h2>
			<p className="instructions">
				Modifie le composant Exercice5 pour ajouter des éléments à une liste en
				utilisant un champ de texte et un bouton.
			</p>
			<div className="solution">
				<div>
					<input
						type="text"
						value={taskToDo}
						onChange={(e) => setTaskToDo(e.target.value)}
					/>
					<button
						type="button"
						onClick={() => {
							if (taskToDo.trim()) {
								setList([...list, taskToDo]);
								setTaskToDo("");
							}
						}}
					>
						Ajouter
					</button>
					<table>
						<thead>
							<tr>
								<th>A faire</th>
							</tr>
						</thead>
						<tbody>
							{list.map((item, index) => (
								<tr key={index}>
									<td>{item}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Exercice>
	);
}
