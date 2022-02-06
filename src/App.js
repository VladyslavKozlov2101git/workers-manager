import TableBodyContainer from './components/TableBodyContainer/TableBodyContainer';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWorkers } from '../src/redux/actions';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import CreateUserForm from './components/CreateUserForm/CreateUserForm';
import DialogComponent from './components/DialogComponent/DialogComponent';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorkers());
  }, []);

  const workers = useSelector((workers) => workers);

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button onClick={() => openModal()}>+ Add worker</Button>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <Header></Header>
          <TableBodyContainer parseData={workers}></TableBodyContainer>
        </Table>
      </TableContainer>
      <DialogComponent
        open={open}
        onClose={closeModal}
        children={<CreateUserForm onClose={closeModal}></CreateUserForm>}></DialogComponent>
    </div>
  );
}

export default App;
