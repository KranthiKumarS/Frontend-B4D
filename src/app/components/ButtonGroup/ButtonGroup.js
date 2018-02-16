import React from "react"; 
export default class ButtonGroup extends React.Component {
  render() {
    return (
      <div className="bd-example">
      <h1 className="bd-title">Button Group</h1>

     
      <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Left</button>
      <button type="button" className="btn btn-secondary">Middle</button>
      <button type="button" className="btn btn-secondary">Right</button>
    </div>
</div>
  
    );
  }
}
 