"use-strict";

import React from "react";
import ReactDOM from "react-dom";

const data = {
    "environment"   : process.env.NODE_ENV,
    "version"       : process.env.npm_package_version,
    "visitors"      : 0,
    "sessions"      : 0,
    "coverage"      : "0%"
}

class Footer extends React.Component {
    render(){
        return (
            <div>ADAM ZERELLA &nbsp;&nbsp;&nbsp;&nbsp; {data.version}</div>
        );
    }
}

class Dashboard extends React.Component{
    render(){
        return (
            <div>
                ENV: {data.environment}
                VISITORS: {data.visitors}
                SESSIONS: {data.sessions}
                COVERAGE: {data.coverage}
            </div>
        );
    }
}

ReactDOM.render(<Dashboard/>, document.getElementById("dashboard"));
ReactDOM.render(<Footer/>, document.getElementById("footer"));
