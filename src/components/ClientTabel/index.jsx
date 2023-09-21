import '../../index.css';
import "./style.css"
import cobranca from "../../assets/cobranca.svg"
import agrupamento from "../../assets/Frame.svg"
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';




export default function ClientTabel() {
	const { addClient, selectedClient, setSelectedClient
	} = useContext(MyContext);

	const [dbClients, setDbClients] = useState([]);
	useEffect(() => {
		getClients()
		console.log(dbClients);
	}, [addClient])

	useEffect(() => {
		console.log(selectedClient);
	}, [selectedClient])

	async function getClients() {

		const token = localStorage.getItem('token');

		try {

			const response = await api.get(
				"/listClients",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			setDbClients(response.data.clients)

		} catch (error) {

		}
	}

	return (
		<table className="client-table">
			<thead className="client-table-header">
				<tr >
					<th className="client-client"><img src={agrupamento} alt="" />Cliente</th>
					<th className="client-cpf">CPF</th>
					<th className="client-email">E-mail</th>
					<th className="client-phone">Telefone</th>
					<th className="client-status">Status</th>
					<th className="client-new-charge">Criar Cobrança</th>
				</tr>
			</thead>
			<tbody>
				{dbClients.map((client) => {
					return (
						<tr>
							<td className="pointer" onClick={() => { setSelectedClient(client.id) }}>{client.name}</td>
							<td>{client.cpf}</td>
							<td>{client.email}</td>
							<td>{client.phone}</td>
							<td><div className={client.stats ? "client-defaulter" : "client-compliant"}>{client.stats ? "Inadimplente" : "Em dia"}</div></td>
							<td><div className="client-charge pointer" onClick={() => { console.log("cliquei"); }}><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
