import React from "react";
import ReactDom from "react-dom";

const App = () => {
	return <div className='container'>Hello React!</div>;
};

ReactDom.render(<App />, document.getElementById("app"));
