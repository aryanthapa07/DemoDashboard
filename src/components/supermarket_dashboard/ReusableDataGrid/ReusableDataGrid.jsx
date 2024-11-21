import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { dataGridStyles } from './DataGridStyles';

const ReusableDataGrid = ({ rows, columns, visibleRowCount }) => {
  // Default row height in MUI DataGrid is 52px
  const rowHeight = 42;
  const headerHeight = 50; // Default header height
  const totalHeight = (visibleRowCount+1) * rowHeight + headerHeight;

  return (
    <div style={{ height: `${totalHeight}px`, width: '100%' }}>
      <DataGrid
        style={{
          border: '1px solid #8dc63f',
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          overflow: 'hidden'
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        disableSelectionOnClick
        rowHeight={40} // Reduce row height
        headerHeight={50} // Optionally reduce header height
        sx={dataGridStyles}
      />
    </div>
  );
};

ReusableDataGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      flex: PropTypes.number,
      renderCell: PropTypes.func,
    })
  ).isRequired,
  visibleRowCount: PropTypes.number,
};

ReusableDataGrid.defaultProps = {
  visibleRowCount: 10, // Default to 10 rows visible
};

export default ReusableDataGrid;
