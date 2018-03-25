"use-strict";

require("./assets/main.css");
require("./assets/images/download512.png");

require("./assets/content/Adam A. Zerella - Resume.html");
require("./assets/content/Adam A. Zerella - Resume.pdf");
require("./assets/content/Adam A. Zerella - Resume.txt");


import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./js/dashboard.js"
import Footer from "./js/footer.js"

ReactDOM.render( <Dashboard/>, document.getElementById( "dashboard" ));
ReactDOM.render( <Footer/>, document.getElementById( "footer" ));