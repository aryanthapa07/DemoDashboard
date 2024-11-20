import React, { useState, useMemo, useCallback } from "react";
import { Slider, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./AbstractSlider.css";

const AbstractSlider = ({ interval, start, onRangeChange }) => {
  const [range, setRange] = useState([start, start + interval - 1]);
  const [zoomLevel, setZoomLevel] = useState(1)
  const max = useMemo(() => start + interval - 1, [start, interval]);

  const handleSliderChange = useCallback(
    (event, newValue) => {
      setRange(newValue);
      onRangeChange(newValue);
    },
    [onRangeChange]
  );

  const marks = useMemo(() => {
    const step = Math.ceil(interval / 15 / zoomLevel); // Adjust step based on zoom
    return Array.from({ length: interval }, (_, index) => {
      if (index % step === 0) {
        return {
          value: start + index,
          label: `${start + index}`,
        };
      } else {
        return null;
      }
    }).filter(mark => mark !== null);
  }, [start, interval, zoomLevel]);

  return (
    <div className="abstract-slider">
      <Typography variant="h6" className="slider-label">
        Slider (Range: {range[0]} to {range[1]})
      </Typography>
      <Slider
        value={range}
        onChange={handleSliderChange}
        valueLabelDisplay="on"
        min={start}
        max={max}
        marks={marks}
        step={1}
        classes={{
          markLabel: "custom-mark-label",
        }}
      />
    </div>
  );
};

AbstractSlider.propTypes = {
  interval: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  onRangeChange: PropTypes.func.isRequired,
};

export default AbstractSlider;
