"use-strict";

import React, { Component } from "react";

import { DATA } from "./main.js";

/**
 * @author Adam A. Zerella adam.zerella@gmail.com
 * @description Render the data at the top of the page under the div "data".
 */
export default class Dashboard extends React.Component {
    constructor() {
        super();
    };

    render(){
        return (
            <div id="data">
                <table>
                    <tbody>
                        <tr>
                            <td>ENVIRONMENT: {DATA.environment}</td>
                            <td>VERSION: {DATA.version}</td>
                            <td>VISITORS: 0</td>
                            <td>SESSIONS: 0</td>
                            <td>COVERAGE: 0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}