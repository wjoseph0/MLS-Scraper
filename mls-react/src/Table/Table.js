import React, { Fragment } from "react";

export const Table = ({data}) => {

  return(
    <tbody>
      {data.map((item, i) => {
        return [
            <tr key={i}>
              <td>{item.property_id}</td>
              <td>{item.price}</td>
              <td>{item.address.line}</td>
              <td>{item.baths}</td>
              <td>{item.beds}</td>
            </tr>
            ];
      })}
    </tbody>
  );
};
