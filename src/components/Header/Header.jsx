import React from 'react';
import style from './Header.scss';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import Box from '@mui/material/Box';
const cells = [
  { id: 1, title: 'First name', sort: false },
  { id: 2, title: 'Last name', sort: false },
  { id: 3, title: 'Position', sort: false },
  { id: 4, title: 'Hiring date', sort: true },
  { id: 5, title: 'FOP', sort: false },
  { id: 6, title: 'Salary', sort: true },
  { id: 7, title: 'Taxes', sort: true },
  { id: 8, title: 'Actions', sort: true },
];

function Header() {
  return (
    <TableHead className="header">
      <TableRow>
        {cells.map(({ id, title, sort }) => (
          <TableCell key={id}>
            <TableSortLabel>
              {title}
              {<Box component="span" sx={visuallyHidden}></Box>}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default Header;
