import React from "react";

function TableLine(props) {
    return (
        <tr>
            <td scope="row"><img src={props.pictureUrl} style={{height: "75px", width: "50px"}}></img></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={props.clickToDelete} className="btn btn-danger">Delete</button></td>
        </tr>
  );
}

export default TableLine;
