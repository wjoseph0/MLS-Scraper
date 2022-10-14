import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const Table = ({ data }) => {
  return (
    <div>
      <tbody>
        {data.map((item, i) => {
          return [
            <tr key={i}>
              <td>{item.property_id}</td>
              <td>{item.list_price}</td>
              <td>{item.location.address.city}</td>
            </tr>,
          ];
        })}
      </tbody>
    </div>
  );
};
