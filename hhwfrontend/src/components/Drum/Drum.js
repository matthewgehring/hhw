import React from "react";

const Drum = ({ match }) => {
    return (
      <div>
        <h1>{`Drum ${match.params.id}`}</h1>
      </div>
  );
}

export default Drum;