// Dashboard.js
import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import data from "../../Data/data.json"
import "../Dashboard.css";
import AbstractSlider from "../AbstractSlider";
import "./ReusableDataGrid/AppStyles.css";
import ReusableDataGrid from "./ReusableDataGrid/ReusableDataGrid";
import { rows, columns } from './Data/data';
const SupermarketDashboard = () => {
  // Initialize state based on data.json fields
  const initialState = data.reduce((state, item) => {
    state[item.label] = item.value || "";
    return state;
  }, {});

  const [state, setState] = useState(initialState);

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
        <h1>SUPERMARKET VIEW</h1>
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
      <div className="container">
      <div className="grid-wrapper">
        <h1 className="grid-header">Secondary (in Lakhs)</h1>
        <ReusableDataGrid rows={rows} columns={columns} visibleRowCount={10} />
      </div>
      <div className="grid-wrapper">
        <h1 className="grid-header">LPR</h1>
        <ReusableDataGrid rows={rows} columns={columns} visibleRowCount={10} />
      </div>
      <div className="grid-wrapper">
        <h1 className="grid-header">Last Year Full Qtr</h1>
        <ReusableDataGrid rows={rows} columns={columns} visibleRowCount={10} />
      </div>
    </div>
    </div>
  );
};

export default SupermarketDashboard;
