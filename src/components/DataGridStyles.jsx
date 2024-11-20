export const dataGridStyles = {
  "& .MuiDataGrid-root": {
    margin: "10px",
    padding: "5px",
    border: "1px solid #d4edda",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
  },
  "& .MuiDataGrid-columnHeaders": {
    color: "white",
    fontWeight: "bold",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "white",
    fontWeight: "bold",
  },
  "& .MuiDataGrid-cell": {
    fontWeight: "normal",
    textAlign: "center",
    fontSize: "0.9em",
  },
  "& .MuiDataGrid-columnHeader:hover .MuiDataGrid-sortIcon": {
    color: "white", // Make the sort icon white on hover
  },
  "& .MuiDataGrid-columnHeader": {
    "& .MuiDataGrid-sortIcon": {
      color: "gray", // Default color for the sort icon
    },
  },
  "& .super-app-theme--col1": {
    backgroundColor: "#6a5183",
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  "& .super-app-theme--col2": {
    backgroundColor: "#30124e",
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  "& .negative-value": {
    color: "red", // For negative GOLY values
    fontWeight: "bold",
  },
  "& .positive-value": {
    color: "green", // For positive GOLY values
    fontWeight: "bold",
  },
  // Custom Scrollbar Styles
  "& .MuiDataGrid-virtualScroller": {
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#b2b2b2",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#888888",
      },
    },
  },
  "@media (max-width: 768px)": {
    "& .MuiDataGrid-root": {
      margin: "5px",
      padding: "3px",
    },
    "& .MuiDataGrid-columnHeaderTitle, & .MuiDataGrid-cell": {
      fontSize: "0.8em",
    },
  },
};
