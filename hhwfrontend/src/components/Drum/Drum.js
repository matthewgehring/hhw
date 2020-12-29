import React from "react";
import DataTable from "../LabPackTable/LabPackTable";

const Drum = ({ match }) => {
    return (
      <div>
        <h1>{`Drum ${match.params.id}`}</h1>
        <DataTable />
      </div>
  );
}

export default Drum;