import React from 'react';
import '../../index.css';
import "./style.css"
import cobranca from "../../assets/cobranca.svg"
import agrupamento from "../../assets/Frame.svg"

export default function ClientTabel() {
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
				<tr>
					<td>Sara da Silva</td>
					<td>054 365 255 87</td>
					<td>sarasilva@cubos.io</td>
					<td>71 9 9462 8654</td>
					<td><div className="client-defaulter">Inadimplente</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Cameron Williamson</td>
					<td>054 365 255 87</td>
					<td>cameronw@cubos.io</td>
					<td>771 9 9962 8658</td>
					<td><div className="client-defaulter">Inadimplente</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Savannah Nguyen</td>
					<td>054 365 255 87</td>
					<td>snguyen@cubos.io</td>
					<td>71 9 9762 8658</td>
					<td><div className="client-defaulter">Inadimplente</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Darlene Robertson</td>
					<td>054 365 255 87</td>
					<td>darlener@cubos.io</td>
					<td>71 9 9562 8653</td>
					<td><div className="client-defaulter">Inadimplente</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Marvin McKinney</td>
					<td>054 365 255 87</td>
					<td>marvinm@cubos.io</td>
					<td>71 9 9462 8658</td>
					<td><div className="client-defaulter">Inadimplente</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Sandra dos Santos</td>
					<td>054 365 255 87</td>
					<td>sandrasantos@cubos.io</td>
					<td>71 9 9762 8652</td>
					<td><div className="client-defaulter">Inadimplente</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Cameron Williamson</td>
					<td>054 365 255 87</td>
					<td>cameronw@cubos.io</td>
					<td>771 9 9962 8658</td>
					<td><div className="client-compliant">Em dia</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Savannah Nguyen</td>
					<td>054 365 255 87</td>
					<td>snguyen@cubos.io</td>
					<td>71 9 9762 8658</td>
					<td><div className="client-compliant">Em dia</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Darlene Robertson</td>
					<td>054 365 255 87</td>
					<td>darlener@cubos.io</td>
					<td>71 9 9562 8653</td>
					<td><div className="client-compliant">Em dia</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
				<tr>
					<td>Marvin McKinney</td>
					<td>054 365 255 87</td>
					<td>marvinm@cubos.io</td>
					<td>71 9 9462 8658</td>
					<td><div className="client-compliant">Em dia</div></td>
					<td><div className="client-charge"><img src={cobranca} alt="" /><p>Cobrança</p></div> </td>
				</tr>
			</tbody>
		</table>
	)
}
