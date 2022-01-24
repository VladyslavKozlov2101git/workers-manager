import React from 'react';
import TableBody from '@mui/material/TableBody';
import { removeWorker } from '../../redux/actions';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
function TableBodyContainer({ parseData }) {
  const workers = parseData.data.workers;
  const dispatch = useDispatch();
  return (
    <>
      <TableBody>
        {Object.keys(workers).map((key, i) => {
          return (
            <TableRow key={key}>
              <TableCell>{workers[key].first_name}</TableCell>
              <TableCell>{workers[key].last_name}</TableCell>
              <TableCell>{workers[key].position}</TableCell>
              <TableCell>{workers[key].date_hire}</TableCell>
              <TableCell>{workers[key].fop ? 'Yes' : 'No'}</TableCell>
              <TableCell>{workers[key].salary}</TableCell>
              <TableCell>{workers[key].taxes}</TableCell>
              <TableCell>
                <Button onClick={() => dispatch(removeWorker(key))}>Delete</Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
}

export default TableBodyContainer;
