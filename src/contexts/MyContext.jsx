import { createContext, useState, useEffect } from 'react';
import api from '../services/api';


export const MyContext = createContext();

export function ContextProvider(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const [dbCharges, setDbCharges] = useState([]);
  const [dbWon, setDbWon] = useState([]);
  const [dbPaid, setDbPaid] = useState([]);
  const [dbExpected, setDbExpected] = useState([]);

  const [dbAllClient, setDbAllClient] = useState([]);
  const [defaulters, setdefaulters] = useState([])
  const [compliant, setCompliant] = useState([])

  const [paidCharges, setPaidCharges] = useState(0);
  const [wonsCharges, setWonsCharges] = useState(0);
  const [expectedCharges, setExpectedCharges] = useState(0);

  const [attClDb, setAttClDb] = useState(false)
  const [attChDb, setAttChDb] = useState(false)
  const [addClient, setAddClient] = useState(false);

  const [charge, setCharge] = useState([]);
  const [dbClient, setDbClient] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');

  const [selected, setSelected] = useState(1);

  const [feedback, setFeedback] = useState('');
  const [updateClient, setUpdateClient] = useState(false);
  const [openModalUser, setOpenModalUser] = useState(false);
  const [openModalDeleteCharges, setOpenModalDeleteChanges] = useState("");
  const [openModalCharges, setOpenModalCharges] = useState("");
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [openDetailCharModal, setOpenDetailCharModal] = useState({});

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidCpf(cpf) {
    const cpfRegex = /^(?:(?:\d{3}.){2}\d{3}-\d{2}|(\d{11}))$/;
    return cpfRegex.test(cpf);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^[(]?(?:\d{2}[)]?[-. ]?)?\d{5}[-. ]?\d{4}$/;
    return phoneRegex.test(phone);
  }

  async function getCharges() {
    const token = localStorage.getItem('token');

    try {
      const response = await api.get('/listDebts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const paid = response.data.debts.filter(
        (charge) => charge.status === 'Paga',
      );

      const wons = response.data.debts.filter(
        (charge) => charge.status === 'Vencida',
      );

      const expected = response.data.debts.filter(
        (charge) => charge.status === 'Pendente',
      );

      setDbCharges(response.data.debts);
      setDbPaid(paid);
      setDbWon(wons);
      setDbExpected(expected);

      const paidN = paid.map((e) => Number(e.values)).reduce((a, b) => a + b);
      setPaidCharges(paidN);
      const wonsN = wons.map((e) => Number(e.values)).reduce((a, b) => a + b);
      setWonsCharges(wonsN);
      const expectedN = expected
        .map((e) => Number(e.values))
        .reduce((a, b) => a + b);
      setExpectedCharges(expectedN);
    } catch (error) { }
  }

  async function getAllClients() {

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

      const defaulters = response.data.clients.filter((client) => client.defaulter);
      setdefaulters(defaulters);
      const compliant = response.data.clients.filter((client) => !client.defaulter);
      setCompliant(compliant);
      setDbAllClient(response.data.clients)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharges();
  }, [attChDb]);

  useEffect(() => {
    getAllClients();
  }, [attClDb]);




  return (
    <MyContext.Provider value={{
      data, setData,
      dbCharges, setDbCharges,
      dbWon, setDbWon,
      dbPaid, setDbPaid,
      dbExpected, setDbExpected,
      dbAllClient, setDbAllClient,
      defaulters, setdefaulters,
      compliant, setCompliant,
      paidCharges, setPaidCharges,
      wonsCharges, setWonsCharges,
      expectedCharges, setExpectedCharges,
      attClDb, setAttClDb,
      attChDb, setAttChDb,
      addClient, setAddClient,
      charge, setCharge,
      dbClient, setDbClient,
      selectedClient, setSelectedClient,
      selected, setSelected,
      feedback, setFeedback,
      updateClient, setUpdateClient,
      openModalUser, setOpenModalUser,
      openModalCharges, setOpenModalCharges,
      openModalDeleteCharges, setOpenModalDeleteChanges,
      openModalDetail, setOpenModalDetail,
      openDetailCharModal, setOpenDetailCharModal,
      isValidEmail,
      isValidCpf,
      isValidPhone,
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

