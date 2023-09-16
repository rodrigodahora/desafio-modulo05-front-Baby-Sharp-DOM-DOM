import React from 'react';
import '../../index.css';
import cobranca from "../../assets/cobranca.svg"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    cpf: number,
    email: number,
    phone: number,
    status: number,
    charge: image,
) {
    return { name, cpf, email, phone, status, charge };
}

const rows = [
    createData("Sara da Silva", "054 365 255 87", "sarasilva@cubos.io", "71 9 9462 8654", "Inadimplente", cobranca),
    createData("Cameron Williamson", "054 365 255 87", "cameronw@cubos.io", "71 9 9962 8658", "Inadimplente", cobranca),
    createData("Savannah Nguyen", "054 365 255 87", "snguyen@cubos.io", "71 9 9762 8658", "Inadimplente", cobranca),
    createData("Darlene Robertson", "054 365 255 87", "darlener@cubos.io", "71 9 9562 8653", "Inadimplente", cobranca),
    createData("Marvin McKinney", "054 365 255 87", "marvinm@cubos.io", "71 9 9462 8658", "Inadimplente", cobranca),
    createData("Sandra dos Santos", "054 365 255 87", "sandrasantos@cubos.io", "71 9 9762 8652", "Inadimplente", cobranca),
    createData("Cameron Williamson", "054 365 255 87", "cameronw@cubos.io", "71 9 9962 8658", "Em dia", cobranca),
    createData("Savannah Nguyen", "054 365 255 87", "snguyen@cubos.io", "71 9 9762 8658", "Em dia", cobranca),
    createData("Darlene Robertson", "054 365 255 87", "darlener@cubos.io", "71 9 9562 8653", "Em dia", cobranca),
    createData("Marvin McKinney", "054 365 255 87", "marvinm@cubos.io", "71 9 9462 8658", "Em dia", cobranca),

];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1080, margin: 0, padding: 0 }} aria-label="simple table">
                <TableHead sx={{ margin: 0, padding: 0, border: "none", boxShadow: "none" }}>
                    <TableRow>
                        <TableCell>Cliente</TableCell>
                        <TableCell align="left">CPF</TableCell>
                        <TableCell align="left">E-mail</TableCell>
                        <TableCell align="left">Telefone</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Criar Cobrança</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.cpf}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="left"><img src={cobranca} alt="" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
