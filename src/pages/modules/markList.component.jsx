import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Full name',
    width: 200,
    editable: false,
  },
  {
    field: 'm001',
    headerName: '10',
    width: 30,
    editable: true,
  },
  {
    field: 'm002',
    headerName: '10',
    width: 30,
    editable: true,
  },
  {
    field: 'm003',
    headerName: '10',
    width: 30,
    editable: true,
  },
  {
    field: 'm004',
    headerName: '10',
    width: 30,
    editable: true,
  },
  {
    field: 'm005',
    headerName: '10',
    width: 30,
    editable: true,
  }
];

const rows = [
    { id: 1, name: 'Abrham Getachew', m001: '9', m002: '9', m003: '9', m004: '9', m005: '9'},
    { id: 2, name: 'Selemon Brhanu', m001: '9', m002: '9', m003: '9', m004: '9', m005: '9'},
    { id: 3, name: 'Ruth Getachew', m001: '9', m002: '9', m003: '9', m004: '9', m005: '9'},
    { id: 4, name: 'Sosina Sehalu', m001: '9', m002: '9', m003: '9', m004: '9', m005: '9'},
    { id: 5, name: 'Bereket Alemu', m001: '9', m002: '9', m003: '9', m004: '9', m005: '9'},
    { id: 6, name: 'Wendimu Temesgen', m001: '9', m002: '9', m003: '9', m004: '9', m005: '9'},
];

export  function MarkList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
