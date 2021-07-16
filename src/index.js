import React from "react";
import ReactDOM from "react-dom";

import "./Style.css";

import Cmp1 from "./components/Cmp1";

class Comprince extends React.Component {
 
 
  render() {
    return <div id="conteudo">
      <Cmp1/>
    </div>;
  }
}
ReactDOM.render(<Comprince />, document.getElementById("root"));
