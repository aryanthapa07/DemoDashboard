import React, { useMemo, memo } from "react";
import { DataGrid } from "@mui/x-data-grid";

const NewTableComponent = memo(({ data, title }) => {
  // Memoize columns
  const columns = useMemo(() => {
    if (data.rows.length === 0) return [];
    return Object.keys(data.rows[0]).map((col) => ({
      field: col,
      headerName: col.toUpperCase(),
      flex: col === "name" ? 2 : 1,
      headerAlign: col === "name" ? "left" : "right",
      align: col === "name" ? "left" : "right",
      sortable: true,
      renderHeader: (params) => (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: col === "name" ? "start" : "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {params.colDef.headerName}
        </span>
      ),
      cellClassName: (params) =>
        col === "GOLY"
          ? params.value?.includes("-")
            ? "negative"
            : "positive"
          : "",
    }));
  }, [data]);

  // Memoize rows
  const rows = useMemo(() => {
    return [
      ...data.rows,
      {
        id: "total", // Unique ID for the total row
        name: "Total",
        ...data.total,
      },
    ].map((row, index) => ({ id: index, ...row }));
  }, [data]);

  // Styles for the container
  const containerStyle = {
    margin: "20px",
    padding: "10px",
    border: "1px solid #d4edda",
    borderRadius: "8px",
  };

  const titleStyle = {
    textAlign: "start",
    color: "#6a5183",
    paddingLeft: "12px",
  };

  const gridContainerStyle = {
    height: 400,
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div style={gridContainerStyle}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={100} // Adjust for better performance
          rowsPerPageOptions={[50, 100, 200]} // Custom options for pagination
          pagination
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeader": { backgroundColor: "#30124e" },
            "& .MuiDataGrid-scrollbarFiller--header":{backgroundColor: "#30124e"},
            "& .MuiDataGrid-columnHeader[data-field='name']": {
              backgroundColor: "#6a5183",
              color: "white",
            },
            "& .MuiDataGrid-cell": { fontWeight: "normal" },
            "& .MuiDataGrid-row:hover": { backgroundColor: "#f5f5f5" },
            "& .negative": { color: "red" },
            "& .positive": { color: "green" },
            "& .MuiDataGrid-sortIcon, & .MuiDataGrid-menuIcon &.MuiDataGrid-menuOpen": {
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
});

export default NewTableComponent;
