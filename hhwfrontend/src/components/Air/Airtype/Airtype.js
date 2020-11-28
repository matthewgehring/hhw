import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";

const columns = [
  { key: "Drum Number", name: "Drum Number", editable: true },
  { key: "start", name: "start", editable: true },
  { key: "end", name: "end", editable: true },
  { key: "total", name: "total", editable: false },
  { key: "gallons", name: "gallons", editable: false }
];

let rows = [
  { "Drum Number": 0, start: 0, end: 20 },
];

class Airtype extends Component {
  constructor(props){
    super(props);
    this.state ={
      rows,
    }
}

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  addRow = () => {
    this.setState((state) => {
      return this.state.rows.push({ id: 0, start: "", end: 0 });
    })
  }

  render() {
    const {title} = this.props;
    return (
      <div>
      <h1>{`${title}`}</h1>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={this.state.rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
        />
        <button onClick={this.addRow}>Add Row</button>
      </div>
    );
  }
}

export default Airtype;