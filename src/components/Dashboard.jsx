// Dashboard.js
import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import data from "../Data/data.json";
import "./Dashboard.css";
import AbstractSlider from "./AbstractSlider";
import { tableData } from "../Data/tableData";
// import { largeTableData } from "../Data/largeData";
import TableComponent from "./TableComponent";
import DataGridComponent from "./DataGridComponent";
import "../components/AppStyles.css";
import { rows, columns } from "../Data/DataGridData";
import NewTableComponent from "./NewTableComponent";
import { generateLargeData } from "../Data/largeData";
const Dashboard = () => {
  // Initialize state based on data.json fields
  const initialState = data.reduce((state, item) => {
    state[item.label] = item.value || "";
    return state;
  }, {});

  const [state, setState] = useState(initialState);

  const largeData = generateLargeData(3, 1000);

  // Handle change for each dropdown
  const handleChange = (label, value) => {
    setState((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>DISTRIBUTOR VIEW</h1>
        <div className="Green-line"></div>
      </header>
      <div className="dropdown-container">
        {data.map((item, index) => {
          if (item.type === "selection" || item.data) {
            return (
              <Dropdown
                key={index}
                label={item.label}
                title={item.title || item.label}
                options={item.data || [{ label: "All", value: "" }]}
                selectedValue={state[item.label]}
                onChange={(e) => handleChange(item.label, e.target.value)}
              />
            );
          } else {
            return (
              <Dropdown
                key={index}
                label={item.label}
                title={item.title}
                options={[
                  { label: item.value || "All", value: item.value || "" },
                ]}
                selectedValue={state[item.label]}
                onChange={(e) => handleChange(item.label, e.target.value)}
              />
            );
          }
        })}
        <AbstractSlider interval={12} start={1} />
      </div>
      <div className="Green-line"></div>
      <div className="Green-bg">VALUE IN LACS</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {largeData.map((table, index) => (
          <NewTableComponent key={index} data={table} title={table.category} />
        ))}
      </div>
      <div className="Green-bg">VOLUME</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {largeData.map((table, index) => (
          <NewTableComponent key={index} data={table} title={table.category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
