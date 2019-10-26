//THIS IS THE GENERAL UPDATE PATTERN

import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();
  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");
  }, [data]);

  const UpdateData = () => {
    setData(data.map(value => value + 5));
  };

  const FilterData = () => {
    setData(data.filter(value => value < 35));
  };

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={UpdateData}>Update Data</button>
      <button onClick={FilterData}>Filter Data</button>
    </React.Fragment>
  );
}

export default App;
