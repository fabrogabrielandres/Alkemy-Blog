import React from "react";
import "./styles.css";

function NotFound() {
  return (
    <div>
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">Not Found</div>
        <a className="btn" href="/">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default NotFound;
