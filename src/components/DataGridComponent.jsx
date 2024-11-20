import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { dataGridStyles } from "./DataGridStyles";

const DataGridComponent = ({ rows, columns, visibleRowCount }) => {
  // Default row height in MUI DataGrid is 52px
  const rowHeight = 52;
  const headerHeight = 56; // Default header height
  const totalHeight = visibleRowCount * rowHeight + headerHeight;

  return (
    <div style={{ height: `${totalHeight}px`, width: "100%" }}>
      <DataGrid
        style={{
          border: "1px solid #B6FFA1",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          width: "100%",
          height: "100%",
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        disableSelectionOnClick
        sx={dataGridStyles}
      />
    </div>
  );
};

DataGridComponent.propTypes = {
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

DataGridComponent.defaultProps = {
  visibleRowCount: 10, // Default to 10 rows visible
};

export default DataGridComponent;
