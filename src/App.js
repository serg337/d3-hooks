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
      .join(
        //What I want to do with a new piece of data - the "r" value is the radius.
        enter => enter.append("circle").attr("class", "new"),
        //define what I want to do with the elements that are already there and need to update
        //this gives the class "updated" to all the elements that where updated.
        update => update.attr("class", "updated")
        //Here you define what to do with the elements that exit, you don't usually need this exit
        //callback, because by default, d3 will remove exiting elements.
        //exit => exit.remove()
      )
      //We put these attributes after the join. The join will handle a combination of both
      //entering and updating elements to not repeat code after the enter and update callbacks
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
