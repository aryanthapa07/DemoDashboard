import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { IoTriangle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const TableComponent = ({ data, title }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Extract column names dynamically from the first row of data
  const columns = data.rows.length > 0 ? Object.keys(data.rows[0]) : [];

  const handleSort = (key) => {
    let direction = "desc"; // Default sorting direction is descending
    if (sortConfig.key === key) {
      // Toggle direction if the same column is clicked
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }
    setSortConfig({ key, direction });
  };

  const sortedRows = [...data.rows].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (sortConfig.direction === "asc") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? (
        <IoTriangle />
      ) : (
        <TbTriangleInvertedFilled />
      );
    }
    return <IoTriangle />;
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        border: "1px solid #d4edda",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ textAlign: "start", color: "#6a5183", paddingLeft: "12px" }}>
        {title}
      </h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col}
                  style={{
                    backgroundColor: col === "name" ? "#6a5183" : "#30124e",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  align={col === "name" ? "left" : "right"}
                >
                  <Button
                    onClick={() => handleSort(col)}
                    style={{ color: "white", textTransform: "none" }}
                  >
                    <span style={{ marginRight: "4px" }}>
                      {col.toUpperCase()}
                    </span>
                    {renderSortIcon(col)}
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render sorted rows */}
            {sortedRows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    align={col === "name" ? "left" : "right"}
                    style={{
                      fontWeight: col === "name" ? "bold" : "normal",
                      color:
                        col === "GOLY" && row[col]?.includes("-")
                          ? "red"
                          : col === "GOLY"
                          ? "green"
                          : "inherit",
                    }}
                  >
                    {row[col]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {/* Render the Total row */}
            <TableRow>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  align={col === "name" ? "left" : "right"}
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#f5f5f5", // Optional: Highlight total row
                  }}
                >
                  {col === "name" ? "Total" : data.total[col] || ""}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
