"use-strict";

import React, { Component } from "react";
import { DATA } from "./main.js";

import CountUp from 'react-countup';

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
                            <td>NODE ENV: {DATA.environment}</td>
                            <td>VERSION: {DATA.version}</td>
                            <td>NPM DEPENDENCIES: <CountUp start={0} duration={3} end={DATA.dependencies} /> </td>
                            <td>BUNDLE SIZE: {DATA.bundleSize} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}